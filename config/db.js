import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection done successffully");
    }catch(error){
        console.error("Connection Failed",error);
    }
}
export default connectDB