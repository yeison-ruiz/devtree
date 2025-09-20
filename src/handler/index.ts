import { Request, Response } from 'express';
import slug from 'slug';
import { User } from "../models/User."
import { hashPassword } from '../utils/auth';



const CreateAccount =  async (req: Request, res: Response)  => {
    console.log(req.body)
    try {


        const { email, password} = req.body;

        //validar si el usuario existe
        const user = await User.findOne({ email })
        if (user) {
            return res.status(409).send('El usuario ya existe')
        }

       const userR =  await User.create(req.body)
        userR.password = await hashPassword(password)
        await userR.save()
     
    res.send('Registro exitoso')
        
    } catch (error) {
        console.error(error)
    res.status(500).send('Error al registrar el usuario')
        
    }

   
}

 export default CreateAccount