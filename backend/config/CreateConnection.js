const mysql = require("mysql");
require("dotenv").config();
// console.log(pr)
module.exports = db = mysql.createConnection({

  user: "root",
  password: '{Notredame5058}',
  database: 'collaborative',
});
