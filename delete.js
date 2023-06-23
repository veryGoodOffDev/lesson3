const btnDeleteXml = document.querySelector("#delete_xml");
const btnDeleteFetch = document.querySelector("#delete_fetch");
const btnDeleteAxios = document.querySelector("#delete_axios");

const btnDeleteXmlTask = document.querySelector("#delete_xml_task");
const btnDeleteFetchTask = document.querySelector("#delete_fetch_task");
const btnDeleteAxiosTask = document.querySelector("#delete_axios_task");

const url = "http://45.12.239.156:8081/api";

function getToken() {
  const savedToken = JSON.parse(localStorage.getItem("accessData"));
  return savedToken;
}
const userToken = getToken();

function deleteProjectXML(id) {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${url}/projects/${id}`);
  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("authorization", `Bearer ${userToken.token}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log("error", xhr.response);
    } else {
      console.log(xhr.response);
      localStorage.removeItem("projectId");
      localStorage.removeItem("taskId");
    }
  };
  xhr.send();
}

function deleteProjectFetch(id) {
  fetch(`${url}/projects/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${userToken.token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if(!response.ok) {
        throw new Error('error')
      } else {
        console.log('Проект удален')
        localStorage.removeItem("projectId");
        localStorage.removeItem("taskId");
      }
     
    })
    .catch((error) => console.log("error", error));
}

function deleteProjectAxios(id) {
  axios
    .delete(`${url}/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${userToken.token}`,
      },
    })
    .then(({ data }) => {
      console.log(data.message, "с Axios");
      localStorage.removeItem("projectId");
      localStorage.removeItem("taskId");
    })
    .catch((error) => console.log("error", error));
}

function deleteTaskXML(id) {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${url}/tasks/${id}`);
  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("authorization", `Bearer ${userToken.token}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log("error", xhr.response);
    } else {
      console.log(xhr.response);
      localStorage.removeItem("taskId");
    }
  };
  xhr.send();
}

function deleteTaskFetch(id) {
  fetch(`${url}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${userToken.token}`,
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error('error')
    } else {
      console.log('Задача удалена')
      localStorage.removeItem("taskId");
    }
  })
    .catch((error) => console.log("error", error));
}

function deleteTaskAxios(id) {
  axios
    .delete(`${url}/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${userToken.token}`,
      },
    })
    .then(({ data }) => {
      console.log(data.message, "с Axios");
      localStorage.removeItem("taskId");
    })
    .catch((error) => console.log("error", error.message));
}

btnDeleteXml.addEventListener("click", () =>
  deleteProjectXML(localStorage.getItem("projectId"))
);
btnDeleteFetch.addEventListener("click", () =>
  deleteProjectFetch(localStorage.getItem("projectId"))
);
btnDeleteAxios.addEventListener("click", () =>
  deleteProjectAxios(localStorage.getItem("projectId"))
);

btnDeleteXmlTask.addEventListener("click", () =>
  deleteTaskXML(localStorage.getItem("taskId"))
);
btnDeleteFetchTask.addEventListener("click", () =>
  deleteTaskFetch(localStorage.getItem("taskId"))
);
btnDeleteAxiosTask.addEventListener("click", () =>
  deleteTaskAxios(localStorage.getItem("taskId"))
);
