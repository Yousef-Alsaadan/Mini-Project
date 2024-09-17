
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
  } else {
    localStorage.removeItem("user");
    window.location.href = "./index.html";
  }
};

function logOut() {
  localStorage.removeItem("user");
  window.location.href = "./home.html";
}
