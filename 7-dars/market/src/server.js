import express from "express";
import usersRouter from "./routes/users.routes.js";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

await connectDB();

app.use("/api/users", usersRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server ishlamoqda: http://localhost:${PORT}`);
});
