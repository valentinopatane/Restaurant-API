import UsersService from "./users.js";
import UsersModel from "../../models/users-model.js";
import TokenGen from "../../models/token-model.js";
import UsersDaoFactory from "../../db/dao-users/factory.js";

const usersDAO = UsersDaoFactory.getDao();
const tokenGen = new TokenGen();
const usersService = new UsersService(usersDAO, tokenGen, UsersModel);

export default usersService;
