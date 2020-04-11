const orm = require("../config/orm.js");

class Note {
    getBookNotes(bookTitle) {
        // return this.connection.query('SELECT notes.id, note FROM notes INNER JOIN books ON books.id = notes.bookId WHERE books.title=?', [bookTitle])
        return orm.innerJoinWhere("notes", ["note"],"notes", "books","bookId","id", "books", "title", bookTitle);
    }



    addBookNote(note, bookId) {
        // return this.connection.query('INSERT INTO notes SET ?',
        //     {
        //         note,
        //         bookId
        //     })
        return orm.insertData("notes", ["note", "bookId"], [note, bookId]);
    }

    deleteNote(noteId) {
        // return this.connection.query('DELETE FROM notes WHERE id=?',
        //     [noteId])
        return orm.deleteData("notes", "id", noteId);
    }

}

module.exports = new Note();