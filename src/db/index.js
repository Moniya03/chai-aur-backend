import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${db_name}`)
        console.log(`\n MongoDB connected !! DB host: ${connectionInstance.connection.host}`);
    } catch(error){
        console.log("Mongodb connection error:", error);
        process.exit(1)
        
    }
}
export default connectDB;