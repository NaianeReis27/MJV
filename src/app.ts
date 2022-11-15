import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleErrorMiddleware from "../src/middlewares/handleError.middleware";
import sessionRoutes from '../src/routes/sessions.router';
import userRoutes from '../src/routes/user.router';
import schedulesRoutes from "./routes/postAnimals.router";
const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/animals", schedulesRoutes);
app.use(handleErrorMiddleware);

export default app