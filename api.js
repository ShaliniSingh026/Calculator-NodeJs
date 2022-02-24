//creating the server and client
const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(4000, ()=>{
    console.log("Sever is now listening at port 4000");
})

client.connect();


app.get('/', (req, res)=>{
    client.query(`Select * from user_cal`, (err, result)=>{
       // client.query(`insert into user_cal(first_num, second_num, operator, result, time) 
       // values('10', '5', '+', '15', current_timestamp)`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    //client.end;
})

