document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.querySelector('#list ul#tasks')
  
  taskList.addEventListener('click', function(e){
    if (e.target.className === 'delete-button') {
      const taskItem = e.target.closest('.task')
      taskItem.remove()
    }
  })

  function taskRender(task) {
    const newTask = document.createElement('li')
    newTask.className = 'task'
    newTask.textContent = `${task.description}, ${task.priority}`
    if (task.priority > 5 && task.priority < 10) {
      newTask.style.color = 'yellow'
    }
    else if (task.priority > 10) {
      newTask.style.color = 'red'
    }
    else {
      newTask.style.color = 'green'
    }

    const deleteBtn = document.createElement('BUTTON')
    deleteBtn.className = 'delete-button'
    deleteBtn.textContent = "Remove Task"

    taskList.append(newTask)
    newTask.append(deleteBtn)
  }
  
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', taskCreator)

  function taskCreator(event){
    event.preventDefault()

    const description = event.target['new-task-description'].value
    const priority = event.target['new-task-priority'].value
    const task = {
      description: description,
      priority: priority
    }
    taskRender(task)
    event.target.reset()
  }


});