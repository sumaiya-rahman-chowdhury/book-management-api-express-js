const { write } = require("fs");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  writer: String,
  description: String,
  price: Number,
});

const Books = mongoose.models.books 
|| 
mongoose.model("books", bookSchema);

module.exports = Books;
