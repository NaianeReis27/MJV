import { Router } from "express";
import createSchedulesController from "../controllers/postAnimals/createPostAnimals.controllers";
import listSchedulesForIdController from "../controllers/postAnimals/listPostAnimals.controllers";
import authMiddleware from "../middlewares/auth.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", authMiddleware, createSchedulesController);
schedulesRoutes.get("", authMiddleware, listSchedulesForIdController);

export default schedulesRoutes