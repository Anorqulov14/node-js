import express from "express";
import countryRoutes from "./src/routers/country.routes.js";

const app = express();
app.use(express.json());

app.use("/countries", countryRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
