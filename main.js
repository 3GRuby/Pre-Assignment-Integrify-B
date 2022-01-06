const input = document.querySelector("#input");
const addButton = document.querySelector("#submitBtn");
const disView = document.querySelector(".main-container");
const removeall = document.querySelector(".all-remove");

// Add Task Event
addButton.addEventListener("click", addTask);

// Remove button Event
disView.addEventListener("click", removeBtn);

// Remove all Task Event
removeall.addEventListener("click", removeAllBtn);

// Add Task function
function addTask(e) {
  e.preventDefault();

  let inputValue = input.value;

  const container = document.querySelector(".main-container");
  const displayview = document.createElement("div");
  displayview.setAttribute("class", "display-view");

  const taskView = document.createElement("div");

  taskView.setAttribute("class", "task-view");
  const prag = document.createElement("p");

  prag.setAttribute("class", "paragaph");
  const rmBtn = document.createElement("button");
  rmBtn.innerHTML = '<i class="fas fa-times"></i>';

  rmBtn.classList.add("cancel-btn");

  rmBtn.setAttribute("id", "cancel-btn");

  const checkedButton = document.createElement("button");
  checkedButton.innerHTML = '<i class="fas fa-check"></i>';
  checkedButton.classList.add("check-btn");

  if (inputValue == "") {
    alert("please write something before add");
  } else {
    container.appendChild(displayview);
    displayview.appendChild(taskView);
    taskView.appendChild(checkedButton);
    taskView.appendChild(prag);
    taskView.appendChild(rmBtn);

    prag.textContent = inputValue;
  }

  input.value = "";
}

// Remove button and text Decoration function
function removeBtn(e) {
  const Task = e.target;

  /* Delete Task */

  if (Task.classList[0] === "cancel-btn") {
    const taskapp = Task.parentElement;
    taskapp.remove();
  }

  /*Mark done Task */
  if (Task.classList[0] === "check-btn") {
    const taskapp = Task.parentElement;
    taskapp.classList.toggle("completedTask");
  }
}

/* Remove all Button Function */

function removeAllBtn(e) {
  const tsList = document.querySelectorAll(".display-view");

  for (const i of tsList) {
    i.remove();
  }
}
