import Categories from "../schemas/categories.js";
import { catAsDto } from "../dto/categories.js";
export default class CatDAO {
    constructor() {}
    async create(c) {
        const data = new Categories({ _id: c.categorieId, ...c });
        try {
            await data.save();
            return catAsDto(data);
        } catch (error) {
            console.log(error);
        }
    }
    async getCs() {
        try {
            const data = await Categories.find();
            return catAsDto(data);
        } catch (error) {
            console.log(error);
        }
    }
    async getC(id) {
        try {
            const categorie = await Categories.findById({
                _id: id,
            });
            return catAsDto(categorie);
        } catch (error) {
            console.log(error);
        }
    }
    async update(id, data) {
        try {
            const value = await Categories.findByIdAndUpdate(
                id,
                { ...data },
                { new: true }
            );
            return catAsDto(value);
        } catch (error) {
            console.log(error);
        }
    }
    async delete(id) {
        try {
            await Categories.findByIdAndDelete({ _id: id });
            return true;
        } catch (error) {
            console.log(error);
            throw new Error("Error. Product wasn't deleted.");
        }
    }
}
