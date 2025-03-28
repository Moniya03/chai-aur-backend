import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})
const startServer = async () => {
    try {
      await connectDB();
  
      app.on("error", (error) => {
        console.log("ERR", error);
      });
  
      const PORT = process.env.PORT || 8000;
      app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
      });
    } catch (err) {
      console.log("MONGO DB connection failed!!", err);
    }
  };
  
  startServer();
  
/*
import express from "express";

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
        app.on("error", (error) => {
            console.log("ERR:", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
})();
*/