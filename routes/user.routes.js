const express = require("express");
require('dotenv').config()
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const UserModel = require("../model/user.model");
const saltRounds = 10;

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {

    const { userName, email, pass } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
        res.json({ msg: "User Exist" })
        return
    }
    try {
        bcrypt.hash(pass, saltRounds, async function (err, hash) {
            // Store hash in your password DB.
            if (err) {
                res.json({ msg: "Internal server Error" })
            } else {
                await UserModel.create({ ...req.body, pass: hash })
                res.json({ msg: "signup successful" })
            }

        });
    } catch (error) {
        res.json({ msg: "Internal server Error" })
    }
})

//login
userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    const user = await UserModel.findOne({ email });
    // console.log(user);
    if (!user) {
        res.json({ msg: "User with this Email does not exist" })
        return
    }
    try {
        bcrypt.compare(pass, user.pass, function (err, result) {
            // result == true
            if (err) {
                res.json({ msg: "Internal server Error.", Error: err.message })
            } else {
                if (result) {
                    const token = jwt.sign({ userId: user._id, user: user.userName }, process.env.JWT_SECRETKEY);
                    res.json({ msg: "login successful", token })
                } else {
                    res.json({ msg: "wrong password" })
                }
            }
        });
    } catch (error) {
        res.json({ msg: "Internal server Error..", Error: err.message })
    }
})

module.exports = userRouter