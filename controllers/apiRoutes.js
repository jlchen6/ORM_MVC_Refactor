const books = require("../models/books");
const notes = require("../models/notes");

module.exports = (app) => {

  app.get('/api/books', (req, res) => {
   books.getAllBooks()
    .then(results => res.json(results))
    .catch(error => res.json(error))
  });

  app.get('/api/book/:name', (req, res) => {
    const bookName = req.params.name;
    books.getOneBook(bookName)
    .then(results => res.json(results))
    .catch(error => res.json(error))
  })

  app.get('/api/book/notes/:name', (req, res) => {
    const bookName = req.params.name;

    notes.getBookNotes(bookName)
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error))
  })

  app.post('/api/book/new', (req, res) => {
    const { title, coverPhoto, authorId } = req.body;

    books.addBook(title, coverPhoto, authorId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  });

  app.post('/api/book/note', (req, res) => {
    const { note, bookId } = req.body;

    notes.addBookNote(note, bookId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  })

  app.delete('/api/note/:id', (req, res) => {
    notes.deleteNote(req.params.id)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  })
}