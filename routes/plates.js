import { Router } from "express";
import { createPlate, editPlate, deletePlate } from "../controllers/plates.js";
import { isAuth } from "../auth/auth.js";

const platesRouter = Router();

platesRouter.post("/:id", isAuth, createPlate);
platesRouter.put("/:id", isAuth, editPlate);
platesRouter.delete("/:id", isAuth, deletePlate);

export default platesRouter;
