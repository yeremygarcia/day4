let taskManager = (function () {
  let tasks = [];

  function addTask(task) {
    tasks.push(task);
  }

  function displayTasks() {
    console.log(tasks);
  }

  return {
    addTask: addTask,
    displayTasks: displayTasks,
  };
})();

taskManager.addTask("do hw");
taskManager.addTask("get groceries");
taskManager.addTask("walk dog");

taskManager.displayTasks();
