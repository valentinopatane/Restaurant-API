import bcrypt from "bcrypt";

export default class UsersModel {
    #userId;
    #email;
    #password;
    constructor({ userId, email, password }) {
        (this.userId = userId),
            (this.email = email),
            (this.password = password);
    }

    set userId(userId) {
        if (!userId) {
            throw new Error("Error. Invalid id.");
        }
        this.#userId = userId;
    }

    set email(email) {
        if (!email || email.length < 10 || !email.includes("@")) {
            throw new Error("Error. Invalid email");
        }
        this.#email = email;
    }

    set password(password) {
        if (!password || password.length < 6) {
            throw new Error(
                "Error. Invalid password, must contain at least 6 characters."
            );
        }
        this.#password = password;
    }

    get dto() {
        const product = Object.freeze({
            userId: this.#userId,
            email: this.#email,
            password: this.#password,
        });

        return product;
    }
    doesNotExist(email) {
        if (email !== this.#email) {
            throw new Error("User doesn't exists.");
        }
    }
    async isPasswordCorrect(password) {
        const isPasswordCorrect = await bcrypt.compare(
            password,
            this.#password
        );
        if (!isPasswordCorrect) {
            throw new Error("Error passwords doesn't match.");
        }
    }
}
