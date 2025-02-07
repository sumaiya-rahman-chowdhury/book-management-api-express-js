const express = require("express");
const Books = require("./models/Books");
const router = express.Router();

router.post("/add-books", async (req, res) => {
  try {
    const { name, writer, description, price } = req.body;
    const newBook = new Books({
      name,
      writer,
      description,
      price,
    });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new book" });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to get books", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Books.findById(id);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to get books", error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, writer, description, price } = req.body;
    const { id } = req.params;
    const book = await Books.findByIdAndUpdate(id, {
      name,
      writer,
      description,
      price,
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to update book", error });
  }
});

router.delete("/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const book = await Books.findByIdAndDelete(id)
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({error:"Failed to delete book",error});
    }
})


module.exports = router;
