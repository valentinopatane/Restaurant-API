import { v4 as uuid4 } from "uuid";
export default class PlatesService {
    #dao;
    #model;

    constructor(dao, model) {
        this.#dao = dao;
        this.#model = model;
    }

    async createPlate(idCat, newP) {
        const plateId = uuid4();
        const newPlate = new this.#model({ plateId, ...newP });
        const categorie = await this.#dao.getC(idCat);
        if (!categorie) {
            throw new Error("Category doesn't exist");
        }

        const newData = {
            _id: idCat,
            categorieId: idCat,
            name: categorie.name,
            plates: [newPlate.dto, ...categorie.plates],
        };
        const createdPlate = await this.#dao.update(idCat, newData);
        return createdPlate;
    }
    async editPlate(idCat, idPlate, data) {
        const editedPlate = new this.#model({ ...data });

        const categorie = await this.#dao.getC(idCat);

        if (!categorie) {
            throw new Error("Category doesn't exist");
        }

        const plateFound = categorie.plates.filter(
            (plate) => plate.plateId === idPlate
        );

        if (plateFound.length === 0) {
            throw new Error("Plate doesn't exist");
        }

        const filteredCat = categorie.plates.filter(
            (plate) => plate.plateId !== idPlate
        );
        filteredCat.push(editedPlate.dto);

        const newData = {
            _id: idCat,
            categorieId: idCat,
            name: categorie.name,
            plates: filteredCat,
        };

        const value = this.#dao.update(idCat, newData);
        return value;
    }
    async delPlate(idCat, idPlate) {
        try {
            const categorie = await this.#dao.getC(idCat);
            if (!categorie) {
                throw new Error("Category doesn't exist");
            }

            const plateFound = categorie.plates.filter(
                (plate) => plate.plateId === idPlate.plateId
            );
            if (plateFound.length === 0) {
                throw new Error("Plate doesn't exist");
            }

            const filteredCat = categorie.plates.filter(
                (plate) => plate.plateId !== idPlate.plateId
            );
            const newData = {
                _id: idCat,
                categorieId: idCat,
                name: categorie.name,
                plates: filteredCat,
            };
            const value = this.#dao.update(idCat, newData);
            return value;
        } catch (error) {
            console.log(error);
        }
    }
}
