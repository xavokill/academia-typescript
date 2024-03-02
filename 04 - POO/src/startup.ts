console.log("starting app!!!");

const businessLogic: Program = new Program();
const domManipulator = new DomManipulator();

domManipulator.btnCleanTask.addEventListener("click", ()=> {
    domManipulator.cleanTaskForm();
});

domManipulator.btnAddTask.addEventListener("click", ()=> {
    const newTask = domManipulator.retrieveTask();
    if(newTask){
        businessLogic.addTask(newTask); 
        domManipulator.showTask(newTask, (taskId) => {
            businessLogic.removeTask(taskId);
            domManipulator.removeTask(taskId);
        });      
    }
});



