import mongoose from 'mongoose';



export const connectDB = async() => {

    try {


        const db = await mongoose.connect(process.env.MONGO_URI) 

      


    }catch(error){

        console.log(error)

    }

}