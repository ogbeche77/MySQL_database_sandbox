var mysql = require('mysql');
var express = require('express');
require('dotenv').config()

// var app = express();
// app.listen('3000', () => {
//     console.log('Server also started on port 3000')
// })

//Database connection
var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// app.get('/mydb', (req, res) => {})
//Connect to database
con.connect(function (err) {
    app.get('/mydb', (req, res) => { //Router, enables browser display
        if (err) throw err;
        con.query("SELECT * FROM flights", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send('Database created...'); //Router,enables browser display
        });
    });
});


//Create New Table
app.get('/createtable', (req, res) => {
    var sql = "CREATE TABLE schedule(id int AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), PRIMARY KEY (id))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("New Table created");
        res.send('New Table created...');
    });

})


