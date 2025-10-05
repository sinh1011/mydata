let tasks = [
  //   {
  //     id: 1,
  //     title: "Công việc 1",
  //     status: "todo",
  //   },
  //   {
  //     id: 2,
  //     title: "Công việc 2",
  //     status: "Done",
  //   },
];

let id = null;
const inputTitle = document.getElementById("inputNameJob");

const listStatus = document.querySelectorAll(
  "input[type='radio'][name='statusJob']"
);
const display = document.getElementById("hien-thi");
const selectJob = document.getElementById("selectJob");

const handleSubmit = () => {
  let status = "";
  listStatus.forEach((item) => {
    if (item.checked) {
      status = item.value;
    }
  });

  const formData = {
    id: Date.now(),
    title: inputTitle.value,
    status,
  };
  if (validateForm()) {
    if (id) {
      console.log("fun edit", id, tasks);
      tasks = tasks.map((task) => {
        if (task.id === id) {
          return {
            ...formData,
            id,
          };
        }
        return task;
      });
      id = null;
      document.getElementById("btn-submit").innerText = "Thêm";
    } else {
      tasks = [...tasks, formData];
    }
    render(tasks);
    reset();
    setDataLocalStorage();
  }
};

const render = (arrTasks = []) => {
  console.log(arrTasks, "arrTasks");
  if (arrTasks.length) {
    document.getElementById("no-data").innerText = "";
  } else {
    document.getElementById("no-data").innerText = "No data";
  }
  display.innerHTML = arrTasks
    .map(
      (item) => `<li>
                    <div class="name-job">${item.title}</div>
                    <div class="${item.status} wp-status-job">
                        <div class="status-job">${item.status}</div>
                    </div>
                    <div class="wp-button-job">
                        <button onclick="editItem(${item.id})"><i class="fa-solid fa-pen"></i></button>
                        <button onclick="handleDelete(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
                    </div>   
                </li>`
    )
    .join("");
};

render();

const reset = () => {
  inputTitle.value = "";
  listStatus.forEach((item) => {
    if (item.checked) {
      item.checked = false;
    }
  });
};

const handleDelete = (id) => {
  const newTasks = tasks.filter((item) => item.id !== id);
  tasks = [...newTasks];
  render(tasks);
};

const editItem = (idTask) => {
  console.log(id, "edit", tasks);
  const objectTask = tasks.find((item) => item.id === idTask);
  console.log(objectTask, "objectTask");
  inputTitle.value = objectTask.title;
  id = idTask;
  listStatus.forEach((item) => {
    if (item.value === objectTask.status) {
      item.checked = true;
    }
  });
  document.getElementById("btn-submit").innerText = "Sửa";
};

selectJob.onchange = (e) => {
  console.log(e.target.value, "eee");
  const status = e.target.value;
  const filterStatus = tasks.filter(
    (item) => item.status === status || status === "all"
  );
  render(filterStatus);
};

const validateForm = () => {
  let isCheckTitle = false;
  let isCheckStatus = false;
  let arrChecked = [];

  listStatus.forEach((item) => {
    arrChecked.push(item.checked);
  });
  isCheckStatus = arrChecked.some((item) => item);
  if (inputTitle.value) {
    if (/^\s*$/.test(inputTitle.value)) {
      isCheckTitle = false;
      document.getElementById("mess_title").innerText =
        "bạn không được nhập khoảng trắng";
    } else {
      isCheckTitle = true;
      document.getElementById("mess_title").innerText = "";
    }
  } else {
    document.getElementById("mess_title").innerText = "Mời bạn nhập";
  }
  if (isCheckStatus) {
    document.getElementById("mess_status").innerText = "";
  } else {
    document.getElementById("mess_status").innerText =
      "Status không được bỏ trống";
  }

  return isCheckTitle && isCheckStatus;
};

const setDataLocalStorage = () => {
  const stringData = JSON.stringify(tasks);
  console.log(stringData);
  localStorage.setItem("dataTasks", stringData);
};

const getDataLocalStorage = () => {
  const stringData = localStorage.getItem("dataTasks");
  const localData = JSON.parse(stringData);
  console.log(localData, "localData");
  if (localData) {
    render(localData);
  }
};
getDataLocalStorage();

const clearDataLocal = () => {
  localStorage.removeItem("dataTasks");
  if (localStorage.getItem("dataTasks") === null) {
    render([]);
  }
  // location.reload();
};
