import CategoriesService from "./categories.js";
import categoriesModel from "../../models/categories.js";
import CategoriesDaoFactory from "../../db/dao/factory.js";

const categoriesDAO = CategoriesDaoFactory.getDao();
const categoriesService = new CategoriesService(categoriesDAO, categoriesModel);

export default categoriesService;
