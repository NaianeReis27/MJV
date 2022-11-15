import { Router } from "express";
import loginController from "../controllers/session/login.controllers";

const sessionRoutes = Router();

sessionRoutes.post("", loginController)

export default sessionRoutes