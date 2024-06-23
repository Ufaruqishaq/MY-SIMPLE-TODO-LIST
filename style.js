document.getElementById('add-task').addEventListener('click', function(){
    const taskText = document.getElementById('new-task').value;

    if (taskText){
        addTask(taskText);
        document.getElementById('new-task').value='';
    }
});
function addTask(taskText){
    const taskList =
    document.getElementById('task-list');
    const li = 
    document.createElement('li');
    li.textContent = taskText;

    const completeBtn = document.createElement('button');

    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete';

    completeBtn.addEventListener('click', function(){
        li.classList.toggle('completed');
    });
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit';

    editBtn.addEventListener('click', function ()
    {
        const newTaskText = prompt('Edit the text', taskText);
        if ( newTaskText){
            li.firstChild.textContent =newTaskText;

        }
    });

    const deleteBtn =
    document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', function()
    {
        taskList.removeChild(li);

    });
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}