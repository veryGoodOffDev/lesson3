const btnPutXml = document.querySelector("#put_xml");
const btnPutFetch = document.querySelector("#put_fetch");
const btnPutAxios = document.querySelector("#put_axios");

const btnPutXmlTask = document.querySelector("#put_xml_task");
const btnPutFetchTask = document.querySelector("#put_fetch_task");
const btnPutAxiosTask = document.querySelector("#put_axios_task");

const url = "http://45.12.239.156:8081/api";

function getToken() {
  const savedToken = JSON.parse(localStorage.getItem("accessData"));
  return savedToken;
}
const userToken = getToken();

function putProjectXML(id, name) {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `${url}/projects`);
  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("authorization", `Bearer ${userToken.token}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log("error", xhr.response);
    } else {
      console.log(xhr.response);
    }
  };
  xhr.send(
    JSON.stringify({
      _id: id,
      name,
    })
  );
}

function putProjectFetch(id, name) {
  fetch(`${url}/projects`, {
    method: "PUT",
    headers: {
      "authorization": `Bearer ${userToken.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
      name,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("error", error));
}

function putProjectAxios(id, name) {
  axios
    .put(
      `${url}/projects`,
      { _id: id, name },
      {
        headers: {
          "authorization": `Bearer ${userToken.token}`,
        },
      }
    )
    .then(({data}) => {
      console.log(data);
    })
    .catch((error) => console.log("error", error));
}

function putTaskXML(id, name, description) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `${url}/tasks`);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("authorization", `Bearer ${userToken.token}`);
    xhr.onload = () => {
      if (xhr.status >= 400) {
        console.log("error", xhr.response);
      } else {
        console.log(xhr.response);
      }
    };
    xhr.send(
      JSON.stringify({
        _id: id,
        name,
        
      })
    );
  }
  
  function putTaskFetch(id, name, description) {
    fetch(`${url}/tasks`, {
      method: "PUT",
      headers: {
        "authorization": `Bearer ${userToken.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        name,
       
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log("error", error));
  }
  
  function putTaskAxios(id, name, description) {
    axios
      .put(
        `${url}/tasks`,
        { _id: id,
             name,
            
            },
        {
          headers: {
            "authorization": `Bearer ${userToken.token}`,
          },
        }
      )
      .then(({data}) => {
        console.log(data);
      })
      .catch((error) => console.log("error", error));
  }

btnPutXml.addEventListener("click", () =>
  putProjectXML(localStorage.getItem("projectId"), "newNameProjectWithXML")
);

btnPutFetch.addEventListener("click", () =>
  putProjectFetch(localStorage.getItem("projectId"), "newNameProjectWithFetch")
);
btnPutAxios.addEventListener("click", () =>
  putProjectAxios(localStorage.getItem("projectId"), "newNameProjectWithAxios")
);

btnPutXmlTask.addEventListener("click", () =>
  putTaskXML(localStorage.getItem("taskId"), "new Name Task With XML")
);

btnPutFetchTask.addEventListener("click", () =>
  putTaskFetch(localStorage.getItem("taskId"), "new NameTask With Fetch")
);
btnPutAxiosTask.addEventListener("click", () =>
  putTaskAxios(localStorage.getItem("taskId"), "new NameTask With Axios")
);
