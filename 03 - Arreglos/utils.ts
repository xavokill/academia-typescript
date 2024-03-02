///////////////////// utils ////////////////////////////
////////////////////////////////////////////////////////

function updateCounterTitle(): void{
    divCounter.innerHTML = `Tu lista tiene ${taskList.length} elementos`;    
}

function clearTaskList(): void {
    divResult.innerHTML = "";
 }

function addTaskToHtml(task: string): void {
    if (task !== "") {
        const liNode = document.createElement("li");
        const liText = document.createTextNode(task);

        liNode.className = "list-group-item";
        liNode.appendChild(liText);
        divResult.appendChild(liNode);        
    }
}

function addTaskToArray(task: string): void {
    if(task !== ""){
        taskList.push(task);
    }
}