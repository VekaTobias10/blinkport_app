import { showUserInfo } from "./user.model.js";

export const getUserController = async (req, res) => {
  res.status(200).send( await showUserInfo(req.user));
};
