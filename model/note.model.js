const mongoose = require("mongoose");


let NoteSchema = new mongoose.Schema({

    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    userName: { type: String }
},
    {
        versionKey: false
    })


const NoteModel = mongoose.model("Note", NoteSchema);
module.exports = NoteModel; 