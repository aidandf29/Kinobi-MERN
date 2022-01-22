import express from "express";
import cors from "cors";
import User from "./src/routes/userR";
require("dotenv").config({ path: `./${process.env.NODE_ENV}.env` });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(User);

app.listen(process.env.PORT);
