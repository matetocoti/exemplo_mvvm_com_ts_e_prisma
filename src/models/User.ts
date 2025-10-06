import Task from "./Task.js";

class User {

    private id: number;
    private name: string;
    private email: string;
    private password: string;
    private tasks: Task[];

    constructor(id: number, name: string, email: string , password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.tasks = [];
    }

    getPublicDate() {
        return {
            id: this.id,
            name: this.name,
            email: this.email
        };
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    getTasks(): Object[] {
        return this.tasks.map(task => task.getPublicData());
    }

    validatePassword(password: string): boolean {
        return this.password === password;
    }
}

export default User;