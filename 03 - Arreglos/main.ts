const btnAddTask = document.getElementById("btnAddTask") as HTMLButtonElement;
const btnShowTask = document.getElementById("btnShowTask") as HTMLButtonElement;
const txbTaskTitle = document.getElementById("txbTaskTitle") as HTMLInputElement;
const divCounter = document.getElementById("taskListCounter") as HTMLElement;
const divResult = document.getElementById("taskListPanel") as HTMLElement;

if(btnAddTask === null){
    throw Error("Objeto inválido con id = 'btnAddTask'");
}
if(btnShowTask === null){
    throw Error("Objeto inválido con id = 'btnShowTask'");
}

if(txbTaskTitle === null){
    throw Error("Objeto inválido con id = 'txbTaskTitle'");
}

if(divCounter === null){
    throw Error("Objeto inválido con id = 'divCounter'");
}

if(divResult === null){
    throw Error("Objeto inválido con id = 'taskListPanel'");
}

let taskList: string[] = [];

btnAddTask.addEventListener("click", () => {    
    updateCounterTitle();
    addTaskToArray(txbTaskTitle.value);

    txbTaskTitle.value = "";
});

btnShowTask.addEventListener("click", () => {
    clearTaskList();
    for (let index = 0; index < taskList.length; index++) {
        const element = taskList[index];
        addTaskToHtml(element)
    }
});