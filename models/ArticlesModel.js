import mongoose from "mongoose";


const articlesSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:true
    },
    tabs:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

},{timestamps:true})

export default mongoose.model('Articles',articlesSchema)