const mongoose = require('mongoose');
//
const Schema = mongoose.Schema;
//
const {ObjectId} = mongoose.Schema.Types


//Create Schema user
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/domedia/image/upload/v1591961564/rfjxnykvgogemettlxeq.jpg"
    },
    followers:[
        {
            type:ObjectId,
            ref:"User"
        }
    ],
    following:[
        {
            type:ObjectId,
            ref:"User"
        }
    ]
})
module.exports = mongoose.model("User", userSchema)