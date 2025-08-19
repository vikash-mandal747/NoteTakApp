const mongoose = require("mongoose");


let UserSchema = new mongoose.Schema({

    userName: { type: String, require: true },
    pass: { type: String, require: true },
    email: { type: String, require: true }
},
    {
        versionKey: false
    })


const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel; 