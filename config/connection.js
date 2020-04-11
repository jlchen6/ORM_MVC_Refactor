const mysql = require('mysql');
const util = require('util');

var jawsConnection = mysql.createConnection(process.env.JAWSDB_URL);

jawsConnection.connect();

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: process.env.PORT || 3306,
//     user: 'root',
//     password: 'sql555',
//     database: 'library_db'
//   });

// connection.connect();

// we give connection.query access to promises
// i.e. .then() and .catch()
jawsConnection.query = util.promisify(jawsConnection.query);

module.exports = jawsConnection;

// WITHOUT PROMISIFY
// connection.query('SELECT * FROM books', function(err, results){
//   if(err) throw error
//   console.log(results)
// })

// WITH PROMISIFY - provides access to promises and gives us more control
// connection.query('SELECT * FROM books')
//   .then(results => {
//     console.log(results)
//   })
//   .catch(err => console.log(err))