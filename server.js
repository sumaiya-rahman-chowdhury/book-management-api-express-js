require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const booksRouter = require("./books");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(bodyParser.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message:
        "This is Book Management App.GET book :'/books',PUT :'/books/:id',POST:'/books/add-books',DELETE:'/books/:id'",
    });
});
app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log("Server runnig on PORT", PORT);
});
