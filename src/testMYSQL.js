const express = require('express');
const mysql = require('mysql');
//const argon2 = require("argon2");
//var generator = require('generate-password');
var bodyParser = require('body-parser');



const cors = require("cors");
//create connection
const db = mysql.createConnection({
        host    : 'localhost',
        user    : 'root',
        password: 'edgeyboys0129',
        database: 'edge'
});

//connect
db.connect((err) => {
        if(err){
                throw err;
                //console.log('mysql error');
        }
        console.log('MySQL connected')
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/test',function (req,res) {
        let sql = 'SELECT * FROM Users'; //our query

        db.query(sql,(err, result) => {
                if(err) throw err;
                res.json(result);
        })
});


app.get('/submissions', function (req,res){
        let sql = "SELECT Fullname, UMWID, TaskName, Description, TaskID FROM Tasks NATURAL JOIN Users WHERE Status=\"submitted\"";

        db.query(sql,(err, result) => {
                if(err) throw err;
                res.json(result);
        })
});

app.listen('8000', () => {
        console.log('Server started on port 8000');
});
