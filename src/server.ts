import express from 'express';
import 'dotenv/config'
import router from './router';
import {connectDB } from './config/db';

const app = express();

connectDB();

//leer los datos del formulario que se envia desde postman

app.use(express.json())

app.use(router);



//routing

export default app;
