const orm = require("../config/orm.js");

class Note {
    getBookNotes(bookTitle) {
        return this.connection.query('SELECT notes.id, note FROM notes INNER JOIN books ON books.id = notes.bookId WHERE books.title=?', [bookTitle])
    }



    addBookNote(note, bookId) {
        return this.connection.query('INSERT INTO notes SET ?',
            {
                note,
                bookId
            })
    }

    deleteNote(noteId) {
        return this.connection.query('DELETE FROM notes WHERE id=?',
            [noteId])
    }

}

module.exports = new Note();