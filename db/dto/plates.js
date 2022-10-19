export default class ProductsDTO {
    constructor(plate) {
        this.plateId = plate.plateId;
        this.title = plate.title;
        this.description = plate.description;
        this.price = plate.price;
    }
}

export function asDto(dataP) {
    if (Array.isArray(dataP)) return dataP.map((p) => new ProductsDTO(p));
    else return new ProductsDTO(dataP);
}
