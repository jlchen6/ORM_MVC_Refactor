const orm = require("../config/orm.js");

class Book {

    getAllBooks() {
        // returns a promise so that when it's called we can use .then() and .catch()
        // return this.connection.query('SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId')
        var colsToSelect = ["firstName", "lastName", "title", "coverPhoto"];
        return orm.innerJoin(colsToSelect,"authors", "books", "id", "authorId");
    
    }

    getOneBook(bookTitle) {
        // return this.connection.query('SELECT books.id, firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId WHERE books.title=?', [bookTitle])
        var colsToSelect = ["firstName", "lastName", "title", "coverPhoto"];
        return orm.innerJoinWhere("books", colsToSelect,"authors", "books", "id", "authorId", "books","title", bookTitle);
    }

    addBook(title, coverPhoto, authorId) {
        // return this.connection.query('INSERT INTO books SET ?',
        //     {
        //         title,
        //         authorId,
        //         coverPhoto
        //     })
        return orm.insertData("books", ["title", "coverPhoto", "authorId"], [title, coverPhoto, authorId]);
    }

}

module.exports = new Book();