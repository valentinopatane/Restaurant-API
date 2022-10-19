import PlatesService from "./plates.js";
import PlatesModel from "../../models/plates.js";
import CategoriesDaoFactory from "../../db/dao/factory.js";

const categoriesDAO = CategoriesDaoFactory.getDao();
const platesService = new PlatesService(categoriesDAO, PlatesModel);

export default platesService;
