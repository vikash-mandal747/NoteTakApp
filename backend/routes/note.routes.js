const NoteModel = require("../model/note.model");

const express = require("express");
const auth = require("../middleware/auth.middleware");
const noteRouter = express.Router();

noteRouter.use(auth)

noteRouter.post("/create", async (req, res) => {
    try {
        const { title, body } = req.body;
        const note = await NoteModel.create({ title, body, userId: req.userId, userName: req.user });
        res.json({ msg: "note created", note })
    } catch (error) {
        res.json({ msg: "Internal Server Error", Error: error.message })
    }
})

noteRouter.get("/", async (req, res) => {
    const note = await NoteModel.find({ userId: req.userId });
    res.json({ msg: "user Note", note })
})

noteRouter.patch("/update/:noteID", async (req, res) => {
    const { noteID } = req.params;
    try {
        const updateNote = await NoteModel.findByIdAndUpdate(noteID, req.body, { new: true });
        res.json({ msg: "note updated", updateNote })
    } catch (error) {
        res.json({ msg: "Internal Server Error", Error: error.message })
    }
})

noteRouter.delete("/delete/:noteID", async (req, res) => {
    const { noteID } = req.params;
    try {
        const deletedNote = await NoteModel.findByIdAndDelete(noteID, { new: true });
        res.json({ msg: "note deleted", deletedNote })
    } catch (error) {
        res.json({ msg: "Internal Server Error", Error: error.message })
    }
})


module.exports = noteRouter;