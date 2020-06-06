const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const Schema = mongoose.Schema;

//created Post newfeet schema
const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required:true
    },
    likes:[{
        type:ObjectId,
        ref:"User"
    }],
    comments:[{
        text: String,
        postedBy:{
            type:ObjectId,
            ref:"User"
        }
    }],
    postedBy:{ 
        type: ObjectId,
        ref:"User"
    }
})
module.exports = mongoose.model("Post", postSchema)