class Task {    
    constructor(private _id: number, private _title: string, private _description: string) {         
    }
    
    public get Id() : number {
        return this._id; 
    }

    public get Title(){
        return this._title;
    }
    
    public get Description() : string {
        return this._description;
    }   
}

class PriorityTask extends Task {

    constructor(id: number, title: string, description: string, private priority: number) {
        super(id, title, description);
    }

    public get Priority(): number {
        return this.priority;
    }

    public set Priority(value: number) {
        this.priority = value;
    }
}
