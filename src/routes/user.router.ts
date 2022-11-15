import { Router } from "express";
import createUserController from "../controllers/user/createUser.controllers";
import listUsersController from "../controllers/user/listUsers.controller";
import authMiddleware from "../middlewares/auth.middleware";
import patchUserController from "../controllers/user/patchUser.controllers";
import deleteUserController from "../controllers/user/deleteUser.controller";

const userRoutes = Router();

userRoutes.post('', createUserController)
userRoutes.get('', authMiddleware, listUsersController)
userRoutes.patch('/:id', authMiddleware, patchUserController)
userRoutes.delete('/:id', authMiddleware, deleteUserController)
export default userRoutes