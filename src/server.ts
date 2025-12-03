import express from 'express';
import router from './router';

const app = express();

//leer los datos del formulario que se envia desde postman

app.use(express.json())

app.use(router);



//routing



export default app;
