import Task from "./Task.js";
import { hashPassword , verifyPassword } from "../middlewares/password/crypt.js";
import { generateToken } from "../middlewares/password/auth.js";

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
        this.password = hashPassword(password);
        this.tasks = [];
    }

    public getPublicDate(): Record<'id' | 'name' | 'email' | 'tasks', number | string | Object[]> {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            tasks: this.getTasks()
        };
    }

    public addTask(task: Task): void {
        this.tasks.push(task);
    }

    public getTasks(): Object[] {
        return this.tasks.map(task => task.getPublicData());
    }

    public authenticate(email: string, password: string): string | null{
        if(this.email === email && this.checkPassword(password)) {
            return generateToken(this.getPublicDate());
        }
        return null;
    }

    // Method to verify password (auxiliary method)
    private checkPassword(passwordFromInput: string): boolean {
        return verifyPassword(passwordFromInput , this.password);
    }
}

export default User;