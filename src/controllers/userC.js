import * as getUserService from "../services/user/get";
import * as getUserService from "../services/user/delete";
import * as getUserService from "../services/user/post";
import * as getUserService from "../services/user/put";

export const fetchUsers = (req, res) => {
  try {
    res.status(200).json(await getUserService.all());
  } catch (e) {
    res.status(500).json(e);
  }
};

export const createUsers = (req, res) => {
  try {
    const { name, email, password } = req.body;
    res.status(201).json(
      await postUserService.create({
        name,
        email,
        password,
      })
    );
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateUsers = (req, res) => {
  try {
    const { name, email, password } = req.body;
    res.status(200).json(
      await updateUserService.byId(req.params.id, {
        name,
        email,
        password,
      })
    );
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteUsers = (req, res) => {
  try {
    res.status(200).json(await deleteUserService.byId(req.params.id));
  } catch (e) {
    res.status(500).json(e);
  }
};

// export const createUsers = (req, res) => {
//   res.json({
//     message: "Hello World !",
//   });
// };

// export const updateUsers = (req, res) => {
//   res.json({
//     message: "Hello World !",
//   });
// };

// export const deleteUsers = (req, res) => {
//   res.json({
//     message: "Hello World !",
//   });
// };
