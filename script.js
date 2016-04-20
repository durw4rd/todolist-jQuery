function updateCounters() {
  var totalCount = document.getElementById('total-count');
  var totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;

  var completedCount = document.getElementById('completed-count');
  var completedTodos = document.getElementsByClassName("completed").length;
  completedCount.innerHTML = completedTodos;

  var todoCount = document.getElementById('todo-count');
  var uncompletedTodos = totalTodos - completedTodos;
  todoCount.innerHTML = uncompletedTodos;
}

function toggleDone() {
  var checkbox = this;

  if (checkbox.checked) {
    checkbox.parentElement.className = "todo completed";
  } else {
    checkbox.parentElement.className = "todo";
  }

  updateCounters();
}

function submitTodo() {
  var inputField = document.getElementById("new-todo");
  var newTodoTitle = inputField.value;
  createTodo(newTodoTitle);

  inputField.value = null;

  updateCounters();
}


function createTodo(title) {
  var listItem = document.createElement("li");
  listItem.className = "todo";

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "todo-" + nextTodoId();
  checkbox.value = "1";
  checkbox.checked = false;

  checkbox.onchange = toggleDone.bind(checkbox);
  listItem.appendChild(checkbox);

  space = document.createTextNode(" ");
  listItem.appendChild(space);

  var label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.innerHTML = title;
  listItem.appendChild(label);

  var list = document.getElementById("todolist");
  list.appendChild(listItem);

  updateCounters();
}

function nextTodoId() {
    return document.getElementsByClassName("todo").length + 1;
}

function cleanUpDoneTodos() {
  var list = document.getElementById("todolist");
  var doneItems = document.getElementsByClassName("completed");

  for (var i = doneItems.length; i > 0; i--) {
    list.removeChild(doneItems[i-1]);
  }
  updateCounters();
}
