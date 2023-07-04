// Define task object
class Task {
  constructor(id, title, description, assignee, dueDate, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignee = assignee;
    this.dueDate = dueDate;
    this.status = status;
  }
}

// Define DevTrackr class
class DevTrackr {
  constructor() {
    this.tasks = [];
  }

  // Method to create a new task
  createTask(task) {
    this.tasks.push(task);
  }

  // Method to update the status of a task
  updateTaskStatus(taskId, status) {
    const task = this.tasks.find((t) => t.id === taskId);

    if (task) {
      task.status = status;
    }
  }

  // Method to assign a task to a user
  assignTask(taskId, assignee) {
    const task = this.tasks.find((t) => t.id === taskId);

    if (task) {
      task.assignee = assignee;
    }
  }

  // Method to get all tasks
  getAllTasks() {
    return this.tasks;
  }
}

// Create an instance of DevTrackr
const devTrackr = new DevTrackr();

// Prompt the user for task details
const taskId = prompt("Task ID:");
const title = prompt("Title:");
const description = prompt("Description:");
const assignee = prompt("Assignee:");
const dueDate = prompt("Due Date:");
const status = prompt("Status:");

// Create a new task object with user-provided input
const task = new Task(taskId, title, description, assignee, dueDate, status);

// Add the task to DevTrackr
devTrackr.createTask(task);

// Perform other operations on tasks

// Get all tasks
const allTasks = devTrackr.getAllTasks();
console.log("All Tasks:", allTasks);
