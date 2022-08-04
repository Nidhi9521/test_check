import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { router as studentRoute } from "./controller/student_controller";
const app: Express = express();
const connection = mongoose.connect('mongodb://localhost:27017/test');

dotenv.config();
const port = process.env.PORT;
app.use(express.json());

app.use('/student',studentRoute);

app.listen(port,()=>{
    console.log(`server connectes at ${port}`);
})