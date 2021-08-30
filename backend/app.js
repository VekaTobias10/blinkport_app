import express from "express";
import routerLogin from "./login/login.router.js";
import routerUser from './user/user.router.js'
const port = 5055;

const app = express();
app.use(express.json());

app.use("/login", routerLogin);
app.use("/user", routerUser);

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
