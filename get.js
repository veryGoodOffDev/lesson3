const btnGetXml = document.querySelector("#get_xml");
const btnGetFetch = document.querySelector("#get_fetch");
const btnGetAxios = document.querySelector("#get_axios");

const btnGetXmlTask = document.querySelector("#get_xml_task");
const btnGetFetchTask = document.querySelector("#get_fetch_task");
const btnGetAxiosTask = document.querySelector("#get_axios_task");

const url = "http://45.12.239.156:8081/api";

function getToken() {
  const savedToken = JSON.parse(localStorage.getItem("accessData"));
  return savedToken;
}
const userToken = getToken();

function getProjectXML(id) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${url}/projects/${id}`);
  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("authorization", `Bearer ${userToken.token}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log("error", xhr.response);
    } else {
      console.log(xhr.response, "getXML");
    }
  };
  xhr.send();
}

function getProjectFetch(id) {
  fetch(`${url}/projects/${id}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${userToken.token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data, "getFetch"))
    .catch((error) => console.log("error", error));
}
function getProjectAxios(id) {
  axios
    .get(`${url}/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${userToken.token}`,
      },
    })
    .then(({ data }) => console.log(data, "getAxios"))
    .catch((error) => console.log("error", error.message));
}

function getTaskXML(id) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${url}/tasks/${id}`);
  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("authorization", `Bearer ${userToken.token}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log("error", xhr.response);
    } else {
      console.log(xhr.response, "getTaskXML");
    }
  };
  xhr.send();
}

function getTaskFetch(id) {
  fetch(`${url}/tasks/${id}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${userToken.token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data, "getTaskFetch"))
    .catch((error) => console.log("error", error));
}
function getTaskAxios(id) {
  axios
    .get(`${url}/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${userToken.token}`,
      },
    })
    .then(({ data }) => console.log(data, "getTaskAxios"))
    .catch((error) => console.log("error", error.message));
}

btnGetXml.addEventListener("click", () =>
  getProjectXML(localStorage.getItem("projectId"))
);
btnGetFetch.addEventListener("click", () =>
  getProjectFetch(localStorage.getItem("projectId"))
);
btnGetAxios.addEventListener("click", () =>
  getProjectAxios(localStorage.getItem("projectId"))
);

btnGetXmlTask.addEventListener("click", () =>
  getTaskXML(localStorage.getItem("taskId"))
);
btnGetFetchTask.addEventListener("click", () =>
  getTaskFetch(localStorage.getItem("taskId"))
);
btnGetAxiosTask.addEventListener("click", () =>
  getTaskAxios(localStorage.getItem("taskId"))
);
