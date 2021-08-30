import { validateUser } from "./user.model.js";

export const apiToAuthorizeMiddleware = async (req, res, next) => {
  const authHeader = req.get("Authorization");

  const authInfo = authHeader.split(" ");

  const buff = Buffer.from(authInfo[1], "base64");

  const userInfo = buff.toString("utf-8");

  const userValues = userInfo.split(":");

  if (await validateUser(userValues[0], userValues[1])) {
    req.user = userValues[0];
    next();
  } else {
    res.status(401).send("User session not found");
  }
};
