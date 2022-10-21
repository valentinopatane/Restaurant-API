import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

export default class UsersService {
    #dao;
    #tokenGen;
    #model;
    constructor(userDAO, tokenGen, userModel) {
        this.#dao = userDAO;
        this.#tokenGen = tokenGen;
        this.#model = userModel;
    }

    async register(userData) {
        const userId = uuidv4();
        const hashedPassword = await bcrypt.hash(userData.password, 12);
        const user = { userId, ...userData, password: hashedPassword };

        const verifiedData = new this.#model({ ...user });

        const newUser = await this.#dao.registerUser(verifiedData.dto);

        const token = this.#tokenGen.generate(newUser.email, newUser.userId);

        return { user: newUser, token };
    }

    async login(email, password) {
        const userObtained = await this.#dao.findUser(email);
        if (userObtained === false) {
            throw new Error("User doesn't exist");
        }
        const verifiedData = new this.#model({ ...userObtained });

        await verifiedData.isPasswordCorrect(password);

        const token = this.#tokenGen.generate(
            verifiedData.dto.email,
            verifiedData.dto.userId
        );
        return { user: userObtained.dto, token };
    }
}
