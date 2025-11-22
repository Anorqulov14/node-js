import express from "express";
import { config } from "dotenv";

config()

import { connectDB } from './config/db.js';
import router from './router/category.route.js';

const app = express();

const PORT = +process.env.PORT;


app.use(express.json());

await connectDB()

app.use('/category', router)



app.listen(PORT, ()=>{console.log(`Server listen ${PORT}`)})