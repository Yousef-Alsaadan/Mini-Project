
window.onload = function () {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userBar = document.getElementsByClassName("user_bar")[0];
    // const userName_blog = document.getElementsByClassName("userName_blog")[0];
  
    if (userData) {
      let div = document.createElement("div");
      let name = document.createElement("a");
      let logOut = document.createElement("button");
      // let userName = document.createElement("a");
  
      div.setAttribute("class", "flex");
      name.textContent = `${userData.user}`;
      // userName.textContent = `${userData.user}`;
      name.href = "./profile.html";
      // userName.href = "./profile.html";
      logOut.textContent = "Log Out";
      logOut.setAttribute("onclick", "logOut()");
  
      div.appendChild(name);
      div.appendChild(logOut);
      userBar.appendChild(div);
      // userName_blog.appendChild(userName);
  
      let hidden1 = document.getElementsByClassName("hidden")[1];
      let hidden2 = document.getElementsByClassName("hidden")[2];
      hidden1.style.display = "block";
      hidden2.style.display = "block";
    } else {
        let hidden = document.getElementsByClassName("hidden")[0];
        hidden.style.display = "block";
    }
  };
  
  function logOut() {
    localStorage.removeItem("user");
    window.location.href = "./home.html";
  }
  