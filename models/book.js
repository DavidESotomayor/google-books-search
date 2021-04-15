const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    id: { type: String, require: true },
    title: { type: String, require: true },
    subtitle: { type: String, default: "" },
    authors: [{ type: String, require: true }],
    link: { type: String, required: true },
    description: { type: String, require: true },
    image: { type: String, unique: true, dropsDups: true },
    googleId: {type: String, required: true, unique: true},
})

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema)

module.exports = GoogleBooks