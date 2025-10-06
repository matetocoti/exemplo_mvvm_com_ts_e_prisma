
// Task 1 x User 1 relacionamento com User
// User 1 x Task N relacionamento com Task

class Task {
    private id: number;
    private title: string;
    private description: string;
    private completed: boolean;
    private createdAt: Date;
    private updatedAt: Date;
    private userId: number;

    constructor(id: number, title: string, description: string, completed: boolean, userId: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.userId = userId;
    }

    getPublicData() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            completed: this.completed,
            createAt: this.createdAt,
            updateAt: this.updatedAt,
            userId: this.userId
        };
    }
}

export default Task;