const orm = require("../config/orm.js");

class Book {

    getAllBooks() {
        // returns a promise so that when it's called we can use .then() and .catch()
        return this.connection.query('SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId')
    }

    getOneBook(bookTitle) {
        return this.connection.query('SELECT books.id, firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId WHERE books.title=?', [bookTitle])
    }

    addBook(title, coverPhoto, authorId) {
        return this.connection.query('INSERT INTO books SET ?',
            {
                title,
                authorId,
                coverPhoto
            })
    }

}

module.exports = new Book();