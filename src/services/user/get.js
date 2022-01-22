import User from "../../models/user";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const all = () => {
  return User.find({});
};

const byId = async (id) => User.find({ id });

const byEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ email });
  return bcrypt.compareSync(password, user.password)
    ? {
        secret: jwt.sign(
          {
            id: user._id,
            name: user.name,
            email: user.email,
          },
          process.env.SECRET
        ),
      }
    : { secret: null };
};

export default {
  all,
  byId,
  byEmailAndPassword,
};
