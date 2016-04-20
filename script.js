function updateCounters() {
  var ntodos = $(".todo").length;
  var ncompleted = $(".completed").length;

  $("#total-count").html(ntodos);
  $("#completed-count").html(ncompleted);
  $("#todo-count").html(ntodos - ncompleted);
}

updateCounters();

function toggleDone() {
  var checkbox = this;

  $(checkbox).parent().toggleClass("completed");

  updateCounters();
}

function submitTodo(event) {
  event.preventDefault();

  var title = $("#new-todo").val()

  createTodo(title);

  $("#new-todo").val(null)
  updateCounters();
}

function createTodo(title) {
  var checkboxId = "todo-" + nextTodoId();

  var newTodo = $("<li></li>")
      .addClass("todo")
    .append($('<input>')
      .attr('type', 'checkbox')
      .attr('id', checkboxId)
      .val(1)
      .bind('change', toggleDone)
    ).append(
      document.createTextNode(" ")
    ).append($('<label></label>')
      .attr('for', checkboxId)
      .html(title)
    );
  $("#todolist").append( newTodo );

  updateCounters();
}

function nextTodoId() {
  return $(".todo").length + 1;
}

$("input[type=checkbox]").bind('change', toggleDone);
$("form").bind('submit', submitTodo);
