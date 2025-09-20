import express from 'express';
import 'dotenv/config'
import router from './router';
import { connectDB } from './config/db';

const app = express();

connectDB();

//leer datos desde el servidor
app.use(express.json());

app.use('/', router)



export default app;