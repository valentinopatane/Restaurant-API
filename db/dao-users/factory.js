import UsersDAO from "./users.js";

const opcion = process.argv[2] || "Mongo";

let dao;

switch (opcion) {
    default:
        dao = new UsersDAO();
}

export default class UsersDaoFactory {
    static getDao() {
        return dao;
    }
}
