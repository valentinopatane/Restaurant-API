export default class CategoriesModel {
    #categorieId;
    #name;
    #plates;
    constructor({ id, name, plates }) {
        (this.categorieId = id), (this.name = name), (this.plates = plates);
    }

    set categorieId(categorieId) {
        if (!categorieId) {
            throw new Error(
                "Error. Something happened while creating the category."
            );
        }
        this.#categorieId = categorieId;
    }

    set name(name) {
        if (!name) {
            throw new Error("Error. Must add a categorie name.");
        }
        this.#name = name;
    }

    set plates(plates) {
        this.#plates = plates;
    }

    get dto() {
        const plate = Object.freeze({
            categorieId: this.#categorieId,
            name: this.#name,
            plates: this.#plates,
        });

        return plate;
    }
}
