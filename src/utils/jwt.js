import jwt from "jsonwebtoken";
import config from "../config/config.js";

function createJwt(data) {
  const token = jwt.sign(data, config.jwtSecret,{
    expiresIn: '1d',
  });
  return token;
}
export {createJwt}
