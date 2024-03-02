class DomManipulator {
    private _taskCounter: number = 0;

    public txbTitle: HTMLInputElement;
    public txbDescription: HTMLInputElement;
    public txbPriority: HTMLInputElement;
    public btnAddTask: HTMLButtonElement;
    public btnCleanTask: HTMLButtonElement;
    public taskListTitle: HTMLSpanElement;
    public taskListPanel: HTMLUListElement;

    constructor() {
        this.txbTitle = document.getElementById("txtTitle") as HTMLInputElement;
        this.txbDescription = document.getElementById("txbDescription") as HTMLInputElement;
        this.txbPriority = document.getElementById("txbPriority") as HTMLInputElement;
        this.btnAddTask = document.getElementById("btnAdd") as HTMLButtonElement;
        this.btnCleanTask = document.getElementById("btnClean") as HTMLButtonElement;
        this.taskListTitle = document.getElementById("taskListTitle") as HTMLInputElement;
        this.taskListPanel = document.getElementById("taskList") as HTMLUListElement;        

        if(this.txbTitle === null){
            throw Error("Objeto inválido 'txbTitle'");
        }
        if(this.txbDescription === null){
            throw Error("Objeto inválido 'txbDescription'");
        }      
        if(this.txbPriority === null){
            throw Error("Objeto inválido 'txbPriority'");
        }        
        if(this.btnAddTask == null){    
            throw Error("Objeto inválido 'btnAddTask'");
        }        
        if(this.btnCleanTask == null){  
            throw Error("Objeto inválido 'btnCleanTask'");    
        }
        if(this.taskListTitle === null){
            throw Error("Objeto inválido 'taskListTitle'");
        }
        if(this.taskListPanel === null){
            throw Error("Objeto inválido 'taskList'");
        }
    }    

    public retrieveTask() : PriorityTask | null{
        var newTask: PriorityTask | null = null;
        if(this.isTaskFormValid()){
            newTask = new PriorityTask(this._taskCounter++, this.txbTitle.value, this.txbDescription.value, +this.txbPriority.value);            
        }
        
        this.cleanTaskForm();
        return newTask;
    }

    public showTask(task: PriorityTask, cb: (id: number) => void){
        const newIlElement = document.createElement("li");
        newIlElement.setAttribute("id", task.Id.toString());
        newIlElement.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center";

        const firstSpanElement = document.createElement("span");
        firstSpanElement.className = "badge bg-secondary rounded-pill";
        firstSpanElement.innerHTML = task.Priority.toString();

        const secondSpanElement = document.createElement("span");
        secondSpanElement.innerHTML = task.Title;

        const thirdSpanElement = document.createElement("span");
        thirdSpanElement.innerHTML = task.Description;

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-outline-danger";

        const firstSpanButtonElement = document.createElement("span");
        firstSpanButtonElement.className = "fa-solid fa-trash";

        const secondSpanButtonElement = document.createElement("span");
        secondSpanButtonElement.setAttribute("style", "padding-left: 10px;");
        secondSpanButtonElement.innerHTML = "Eliminar"

        deleteButton.appendChild(firstSpanButtonElement);
        deleteButton.appendChild(secondSpanButtonElement);
        deleteButton.addEventListener("click", () => {
            cb(task.Id)
        });

        newIlElement.appendChild(firstSpanElement);
        newIlElement.appendChild(secondSpanElement);
        newIlElement.appendChild(thirdSpanElement);
        newIlElement.appendChild(deleteButton);

        this.taskListPanel.appendChild(newIlElement);
    }

    public removeTask(taskId: number){
        const liElement = document.getElementById(taskId.toString());
        if(liElement){
            this.taskListPanel.removeChild(liElement)
            --this._taskCounter;
        }
    }

    public isTaskFormValid (): boolean{
        return this.txbTitle.value !== '' && this.txbDescription.value !== '' && this.txbPriority.value !== '';
    }

    public cleanTaskForm(){
        this.txbTitle.value = "";
        this.txbDescription.value = "";
        this.txbPriority.value = "1";  
    }
}