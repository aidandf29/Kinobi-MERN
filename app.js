import express from "express";
import cors from "cors";
import User from "./src/routes/userR";
import "./src/config";

require("dotenv").config({ path: `./${process.env.NODE_ENV}.env` });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", User);

app.listen(process.env.PORT);
