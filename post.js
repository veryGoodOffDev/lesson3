const btnPostXml = document.querySelector("#post_xml");
const btnPostFetch = document.querySelector("#post_fetch");
const btnPostAxios = document.querySelector("#post_axios");

const btnPostXmlTask = document.querySelector("#post_xml_task");
const btnPostFetchTask = document.querySelector("#post_fetch_task");
const btnPostAxiosTask = document.querySelector("#post_axios_task");

const url = "http://45.12.239.156:8081/api";

function getToken() {
  const savedToken = JSON.parse(localStorage.getItem("accessData"));
  return savedToken;
}
const userToken = getToken();

function createProjectXML(name, code) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${url}/projects`);
  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("authorization", `Bearer ${userToken.token}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log("error", xhr.response);
    } else {
      console.log(xhr.response);
      localStorage.setItem("projectId", xhr.response._id);
    }
  };
  xhr.send(JSON.stringify({ name, code }));
}

function createProjectFetch(name, code) {
  fetch(`${url}/projects`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${userToken.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, code }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem("projectId", data._id);
    })
    .catch((error) => console.log("error", error));
}

function createProjectAxios(name, code) {
  axios
    .post(
      `${url}/projects`,
      { name, code },
      {
        headers: {
          authorization: `Bearer ${userToken.token}`,
        },
      }
    )
    .then(({ data }) => {
      console.log(data);
      localStorage.setItem("projectId", data._id);
    })
    .catch((error) => console.log("error", error));
}

function createTaskXML(name, description, projectId) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${url}/tasks`);
  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("authorization", `Bearer ${userToken.token}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log("error", xhr.response);
    } else {
      console.log(xhr.response);
      localStorage.setItem("taskId", xhr.response._id);
    }
  };
  xhr.send(JSON.stringify({ name, description, projectId }));
}

function createTaskFetch(name, description, projectId) {
  fetch(`${url}/tasks`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${userToken.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, projectId }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem("taskId", data._id);
    })
    .catch((error) => console.log("error", error));
}

function createTaskAxios(name, description, projectId) {
  axios
    .post(
      `${url}/tasks`,
      { name, description, projectId },
      {
        headers: {
          authorization: `Bearer ${userToken.token}`,
        },
      }
    )
    .then(({ data }) => {
      console.log(data);
      localStorage.setItem("taskId", data._id);
    })
    .catch((error) => console.log("error", error));
}

btnPostXml.addEventListener("click", () => {
  createProjectXML("My first project XML", "#8184823112312-XML");
});

btnPostFetch.addEventListener("click", () => {
  createProjectFetch("My first project Fetch", "#8184823112312-Fetch");
});

btnPostAxios.addEventListener("click", () => {
  createProjectAxios("My first project Axios", "#8184823112312-Axios");
});

btnPostXmlTask.addEventListener("click", () =>
  createTaskXML(
    "My first task with XML",
    "description first task",
    localStorage.getItem("projectId")
  )
);

btnPostFetchTask.addEventListener("click", () =>
  createTaskFetch(
    "My first task with Fetch",
    "description first task",
    localStorage.getItem("projectId")
  )
);

btnPostAxiosTask.addEventListener("click", () =>
  createTaskAxios(
    "My first task with Axios",
    "description first task",
    localStorage.getItem("projectId")
  )
);
