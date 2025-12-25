const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Laxmi@0706",        // add password if you set one
  database: "cleanshield"
});

module.exports = db;
