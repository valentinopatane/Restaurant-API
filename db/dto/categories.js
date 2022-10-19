export default class ProductsDTO {
    constructor(plate) {
        this.categorieId = plate.categorieId;
        this.name = plate.name;
        this.plates = plate.plates;
    }
}

export function catAsDto(dataP) {
    if (Array.isArray(dataP)) return dataP.map((p) => new ProductsDTO(p));
    else return new ProductsDTO(dataP);
}
