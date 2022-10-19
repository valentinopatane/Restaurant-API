import { Router } from "express";
import {
    getCategories,
    createCategorie,
    editCategorie,
    deleteCategorie,
} from "../controllers/categories.js";
import { isAuth } from "../auth/auth.js";
const categoriesRouter = Router();

categoriesRouter.get("/", getCategories);
categoriesRouter.post("/", isAuth, createCategorie);
categoriesRouter.put("/:id", isAuth, editCategorie);
categoriesRouter.delete("/:id", isAuth, deleteCategorie);

export default categoriesRouter;
