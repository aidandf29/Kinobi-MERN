import { Router } from "express";
import * as UserController from "../controllers/userC";

const User = Router();

User.get("/:id", UserController.fetchUsers);
User.get("/", UserController.fetchUsers);
User.post("/", UserController.createUsers);
User.delete("/", UserController.deleteUsers);
User.put("/:id", UserController.updateUsers);

export default User;
