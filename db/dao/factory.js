import CatDAO from "./dao.js";

const opcion = process.argv[2] || "Mongo";

let dao;

switch (opcion) {
    default:
        dao = new CatDAO();
}

export default class CategoriesDaoFactory {
    static getDao() {
        return dao;
    }
}
