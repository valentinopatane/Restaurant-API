export default class ProductModel {
    #plateId;
    #title;
    #description;
    #price;
    constructor({ plateId, title, description, price }) {
        (this.plateId = plateId),
            (this.title = title),
            (this.description = description),
            (this.price = price);
    }

    set plateId(plateId) {
        if (!plateId) {
            throw new Error(
                "Error. Something happened while creating the plate."
            );
        }
        this.#plateId = plateId;
    }

    set title(title) {
        if (!title || title.length < 3) {
            throw new Error(
                "Error. Invalid title. Must contain at least 3 characters."
            );
        }
        this.#title = title;
    }

    set description(description) {
        this.#description = description;
    }

    set price(price) {
        if (!price || isNaN(price)) {
            throw new Error("Error. Invalid price. Value must be a number.");
        }
        this.#price = price;
    }

    get dto() {
        const plate = Object.freeze({
            plateId: this.#plateId,
            title: this.#title,
            description: this.#description,
            price: this.#price,
        });

        return plate;
    }
}
