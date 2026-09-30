import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description:{
        type:String
    },
    completed:{
        type:Boolean,
        default:false
    }
});

const User = mongoose.model("Todo",newSchema);

export default User;