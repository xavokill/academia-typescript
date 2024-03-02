class Program {
    private _taskList : PriorityTask[] = [];

    constructor() {        
    }

    public addTask(newTask: PriorityTask){
        if(newTask){
            this._taskList.push(newTask);
        }                
    }

    public removeTask(taskId: number){
        const newArray = this._taskList.filter((task) => { 
            return task.Id == taskId 
        });

        this._taskList = newArray;   
    }
}