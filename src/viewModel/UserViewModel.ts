import prisma from "../database/prismaClient.js";
import User from "../models/User.js";
import { hashPassword } from "../middlewares/password/crypt.js";


class UserViewModel {
    static async createUser(name: string, password: string, email: string) {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                // OBSERVAÇÃO: A senha deve ser criptografada antes de ser armazenada no banco de dados
                password: hashPassword(password)
            },
            include: { tasks: true }
        });
        // Retorne apenas os dados públicos
        return new User(user.id, user.name, user.email, user.password).getPublicDate();
    }
}

export default UserViewModel;
