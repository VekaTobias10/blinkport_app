import express from "express";
import { loginController } from "./login.controllers.js";

const routerLogin = express.Router();

routerLogin.route("/").post(loginController);

export default routerLogin;
