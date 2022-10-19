import UsersService from "../service/users/factory.js";

export const register = async (req, res) => {
    try {
        const newUser = await UsersService.register(req.body);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UsersService.login(email, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
};
