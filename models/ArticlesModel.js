import mongoose from "mongoose";


const articlesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postedBy:{
        type:String,
        required:true
    }

},{timestamps:true})

export default mongoose.model('Articles',articlesSchema)