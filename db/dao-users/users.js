import Users from "../schemas/users.js";
import { asDto } from "../dto/users.js";
export default class UsersDAO {
    constructor() {}

    async findUser(email) {
        try {
            const existingUser = await Users.findOne({ email });
            return asDto(existingUser);
        } catch (error) {
            console.log(error);
        }
    }

    async registerUser(user) {
        const newUser = new Users({ _id: user.userId, ...user });

        try {
            await newUser.save();
            return newUser;
        } catch (error) {
            console.log(error);
        }
    }
}
