import Users from "../schemas/users.js";

export default class UsersDAO {
    constructor() {}

    async findUser(email) {
        const existingUser = await Users.findOne({ email });
        return existingUser;
    }

    async registerUser(user) {
        console.log(user);
        const newUser = new Users({ _id: user.userId, ...user });

        try {
            await newUser.save();
            return newUser;
        } catch (error) {
            console.log(error);
        }
    }
}
