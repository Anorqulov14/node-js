import express from 'express';
import { config } from 'dotenv';
config();

import { connectDB } from './config/db.js';
import categoryRouter from './router/category.route.js';

const app = express();
const PORT = +process.env.PORT;

app.use(express.json());

await connectDB();

app.use('/category', categoryRouter);

app.listen(PORT, () => console.log('server running on port', PORT));