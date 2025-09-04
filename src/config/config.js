import dotenv from "dotenv";

dotenv.config();
const config={
mongoDbUrl:process.env.MONGO_DB_URL || "",
port:process.env.PORT || 5000,
version:process.env.VERSION || "1.0.0",
name:process.env.NAME || "",
jwtSecret:process.env.JWT_SECRET || "secret",

}

export default config;