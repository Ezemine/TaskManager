window.onload = function()
{
    tasksList = new TaskManager();
}

const newTask = document.querySelector('#taskModal');

newTask.addEventListener('submit', (e) =>
{
    e.preventDefault();

    var name = document.querySelector('#taskName');
    var description = document.querySelector('#taskDesc');
    var assignedTo = document.querySelector('#taskAssigned');
    var dueDate = document.querySelector('#taskDate');

    //Validations
    $('#taskModal').validate(
    {
        rules: {
            taskName: {
                required: true
            },
        action: "required"
        },
        messages: {
            taskName: {
                required: "Please enter some data",
                minlength: "Your data must be at least 8 characters"
            },
            action: "Please provide some data"
        }
    });

    tasksList.addTask(name, description, assignedTo, dueDate);

    //clear values for input form
    document.querySelectorAll('.taskInput').values = '';
    //closes form
    $('#taskModal').modal('toggle');
})