// let urlBlog = "https://66e7e6a8b17821a9d9da6f51.mockapi.io/blog";

function displayData() {
  let Blogs = document.getElementsByClassName("Blogs")[0];
  fetch(urlBlog)
    .then((response) => response.json())
    .then((json) => {
      json.map((data) => {
        let Blog_card = document.createElement("div");

        let userName_blog = document.createElement("div");
        let Blog_content = document.createElement("div");

        let blog_detial = document.createElement("div");
        let div = document.createElement("div");

        let title = document.createElement("h1");
        let text = document.createElement("p");
        let img = document.createElement("img");

        let a = document.createElement("a");

        title.textContent = data.title;
        text.textContent = data.content;
        img.src = data.img;

        a.textContent = data.writer;
        a.href = './profile.html';

        blog_detial.appendChild(title);
        blog_detial.appendChild(text);
        div.appendChild(img);

        userName_blog.appendChild(a);

        blog_detial.setAttribute("class", "blog_detial");
        Blog_content.setAttribute("class", "Blog_content");
        userName_blog.setAttribute("class", "userName_blog");
        Blog_card.setAttribute("class", "Blog_card");

        Blog_content.appendChild(blog_detial);
        Blog_content.appendChild(div);
        Blog_card.appendChild(userName_blog);
        Blog_card.appendChild(Blog_content);
        Blogs.appendChild(Blog_card);
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

    displayData();
  } else {
    let hidden = document.getElementsByClassName("hidden")[0];
    hidden.style.display = "block";
  }
};

function logOut() {
  localStorage.removeItem("user");
  window.location.href = "./home.html";
}
