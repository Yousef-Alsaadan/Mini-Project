function displayData() {
  let Blogs = document.getElementsByClassName("Blogs")[0];
  let profileName = document.getElementsByClassName("profileName")[0];

  fetch(urlBlog)
    .then((response) => response.json())
    .then((json) => {
      const userData = JSON.parse(localStorage.getItem("user"));
      const filteredBlogs = json.filter(
        (data) => data.writer === userData.user
      );

      filteredBlogs.forEach((data) => {
        let Blog_card = document.createElement("div");

        let userName_blog = document.createElement("div");
        let Blog_content = document.createElement("div");

        let blog_detial = document.createElement("div");
        let div = document.createElement("div");

        let title = document.createElement("h1");
        let text = document.createElement("p");
        let img = document.createElement("img");

        let a = document.createElement("a");

        let div1 = document.createElement("div");
        let del = document.createElement("a");

        title.textContent = data.title;
        text.textContent = data.content;
        img.src = data.img;

        a.textContent = data.writer;
        a.href = "./profile.html";

        del.textContent = "Delete";
        del.style.color = "white";

        blog_detial.appendChild(title);
        blog_detial.appendChild(text);
        div.appendChild(img);

        userName_blog.appendChild(a);

        div1.appendChild(del);

        blog_detial.setAttribute("class", "blog_detial");
        Blog_content.setAttribute("class", "Blog_content");
        userName_blog.setAttribute("class", "userName_blog");
        Blog_card.setAttribute("class", "Blog_card");

        del.setAttribute("class", "redBtn");
        div1.setAttribute("onclick", `del(${data.id})`);

        blog_detial.appendChild(div1);
        Blog_content.appendChild(blog_detial);
        Blog_content.appendChild(div);
        Blog_card.appendChild(userName_blog);
        Blog_card.appendChild(Blog_content);
        Blogs.appendChild(Blog_card);

        let user = document.createElement("h1");

        user.textContent = `${userData.user}`;
        profileName.appendChild(user);
      });
    });
}

window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userBar = document.getElementsByClassName("user_bar")[0];

  if (userData) {
    let div = document.createElement("div");
    let name = document.createElement("a");
    let logOut = document.createElement("button");

    div.setAttribute("class", "flex");
    name.textContent = `${userData.user}`;
    name.href = "./profile.html";
    logOut.textContent = "Log Out";
    logOut.setAttribute("onclick", "logOut()");

    div.appendChild(name);
    div.appendChild(logOut);
    userBar.appendChild(div);

    let hidden1 = document.getElementsByClassName("hidden")[1];
    let hidden2 = document.getElementsByClassName("hidden")[2];
    hidden1.style.display = "block";
    // hidden2.style.display = "block";

    displayData();
  } else {
    localStorage.removeItem("user");
    window.location.href = "./index.html";
  }
};

function logOut() {
  localStorage.removeItem("user");
  window.location.href = "./home.html";
}

function del(id) {
  let setUrl = urlBlog + "/" + id;
  fetch(setUrl, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => {
      location.reload();
    });
}
