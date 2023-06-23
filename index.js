import "./get.js";
import "./post.js";
import "./put.js";
import "./delete.js";

let userToken = getToken();

const url = "http://45.12.239.156:8081/api";

const userData = {
  login: "peregudov.i",
  password: "jc63fk",
};

if (!localStorage.getItem("accessData")) {
  getNewToken(userData.login, userData.password);
}

function saveToken(token) {
  localStorage.setItem("accessData", token);
  getToken();
}

function getToken() {
  const savedToken = JSON.parse(localStorage.getItem("accessData"));
  return savedToken;
}

function getNewToken(login, password) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${url}/login/`);
  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ login, password }));
  xhr.onload = () => {
    xhr.status >= 400
      ? console.log(xhr.status, xhr.response, "error")
      : saveToken(JSON.stringify(xhr.response));
  };

  return xhr.response;
}

console.log(userToken.token, "userToken");
