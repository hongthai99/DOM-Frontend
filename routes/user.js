const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const identifyUserLogin = require('../middleware/identifyUserLogin');
const Post = mongoose.model("Post")
const User = require('../models/user')

router.get('/user/:id', identifyUserLogin, (req, res, next) => {
    User.findOne({_id:req.params._id})
    .select({})
})

module.exports = router