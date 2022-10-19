import { v4 as uuidv4 } from "uuid";
export default class CategoriesService {
    #dao;
    #model;

    constructor(dao, model) {
        this.#dao = dao;
        this.#model = model;
    }

    async getCats() {
        try {
            const categories = await this.#dao.getCs();
            return categories;
        } catch (error) {
            console.log(error);
            throw new Error("Internal Error");
        }
    }
    async createCat(newCat) {
        try {
            const id = uuidv4();
            const plates = [];
            const categorie = new this.#model({ id, ...newCat, plates });

            const newCategorie = await this.#dao.create(categorie.dto);
            return newCategorie;
        } catch (error) {
            console.log(error);
            throw new Error("Internal Error");
        }
    }
    async editCat(id, newData) {
        try {
            const edited = new this.#model({ id, ...newData });
            const categorie = await this.#dao.update(id, edited.dto);
            return categorie;
        } catch (error) {
            console.log(error);
            throw new Error("Internal Error");
        }
    }
    async deleteCat(id) {
        return await this.#dao.delete(id);
    }
}
