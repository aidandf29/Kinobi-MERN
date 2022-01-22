import mongoose from "mongoose";

export default User = mongoose.model(
  user,
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  })
);
