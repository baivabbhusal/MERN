import { verifyJWT } from "../utils/jwt.js";

const auth=async (req,res,next)=>{
    const cookie=req.headers.cookie;

    if(!cookie) return req.status(400).send("User not Authenticate.")


    const authToken=cookie.split("=")[1];
    try {
        await verifyJWT(authToken);
        next();
    } catch (error) {
        res.status(400).send("Invalid auth token.");
    }
}

export default auth