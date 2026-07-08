const express = require('express')
const router = express.Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()

router.get("/",  (req, res) => {
    res.status(200).json({message: "service up and running"})
})

router.post("/register", async (req, res) => {
    const {name, email, password, address} = req.body;

    const user = await User.findOne({email})

    if(user) {
        res.status(400).json({message: "user already exists"})
    }
    const hashedPwd = await bcrypt.hash(password, 10)

    const newUser = new User({
        name,
        email,
        password: hashedPwd,
        address
    })

    await newUser.save();
    
    res.status(201).json({message: "user registration successful"})
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    
    const user = await User.findOne({email})
    if(!user) {
        return res.status(404).json({message:"invalid credentials"})
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword) {
        return res.status(401).json({message: "invalid credentials"})
    }

    const token = jwt.sign({
        _id: user._id,name: user.name},
        process.env.JWT_KEY,
        {expiresIn: '2h'}
    )
    res.status(200).json(token)
})


module.exports = router;