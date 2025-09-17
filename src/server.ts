import express from 'express';
import router from './router';

const app = express();

//leer datos desde el servidor
app.use(express.json());

app.use('/', router)



export default app;