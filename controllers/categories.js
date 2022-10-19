import CategoriesService from "../service/categories/factory.js";
export async function getCategories(req, res) {
    try {
        const data = await CategoriesService.getCats();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error.message);
    }
}
export async function getCategorie(req, res) {
    try {
        const data = await CategoriesService.getCat(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error.message);
    }
}
export async function createCategorie(req, res) {
    try {
        const data = await CategoriesService.createCat(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export async function editCategorie(req, res) {
    try {
        const data = await CategoriesService.editCat(req.params.id, req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export async function deleteCategorie(req, res) {
    try {
        await CategoriesService.deleteCat(req.params.id);
        res.status(200).json("Category has been succesfully deleted.");
    } catch (error) {
        res.status(500).json(error.message);
    }
}
