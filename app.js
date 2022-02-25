// Import
const express = require('express')
const client = require('./connection.js')
//const {Client} = require ('pg')
const bodyparser = require('body-parser')
const app=express()
client.connect();
app.use(bodyparser.urlencoded({extended:true}))
//Set Engine
app.set("view engine", "ejs");

app.get('',(req,res)=> {
    res.sendFile(__dirname + '/index1.html')
})

app.post('/equals',(req,res)=>{
    const n1=Number(req.body.num1)
    const n2=Number(req.body.num2)

    if(req.body.res == '+'){
    const result=n1 + n2
    res.send('' + BigInt(result))
    // Declaration
    const data = {
        first_num: String(n1),
        second_num: String(n2),
        operator: req.body.res,
        res: String(result)
    };
    // Query for inserting values
    client.query("Insert into user_cal values($1,$2,$3,$4,current_timestamp)",
        [data.first_num, data.second_num, data.operator, data.res], (err, result) => {
            if (!err) {
                console.log("Inserted");
            }
            else {
                console.log(err);
            }
            
        });
}

else if(req.body.res == '-'){
    const result=n1 - n2
    res.send(''+ BigInt(result))
    const data = {
    first_num: String(n1),
    second_num: String(n2),
    operator: req.body.res,
    res: String(result)
};
client.query("Insert into user_cal values($1,$2,$3,$4,current_timestamp)",
    [data.first_num, data.second_num, data.operator, data.res], (err, result) => {
        if (!err) {
            console.log("Inserted");
        }
        else {
            console.log(err);
        }
        
    });
}

else if(req.body.res == '/'){
    const result=n1 / n2
    res.send(''+ (result))
    const data = {
        first_num: String(n1),
        second_num: String(n2),
        operator: req.body.res,
        res: String(result)
    };
    client.query("Insert into user_cal values($1,$2,$3,$4,current_timestamp)",
        [data.first_num, data.second_num, data.operator, data.res], (err, result) => {
            if (!err) {
                console.log("Inserted");
            }
            else {
                console.log(err);
            }
            
        });
}

else if(req.body.res == '%'){
    const result=n1 % n2
    res.send(''+ BigInt(result))
    const data = {
        first_num: String(n1),
        second_num: String(n2),
        operator: req.body.res,
        res: String(result)
    };
    client.query("Insert into user_cal values($1,$2,$3,$4,current_timestamp)",
        [data.first_num, data.second_num, data.operator, data.res], (err, result) => {
            if (!err) {
                console.log("Inserted");
            }
            else {
                console.log(err);
            }
            
        });
}
else if(req.body.res == '*'){
    const result=n1 * n2
    res.send(''+ BigInt(result))
    const data = {
        first_num: String(n1),
        second_num: String(n2),
        operator: req.body.res,
        res: String(result)
    };
    client.query("Insert into user_cal values($1,$2,$3,$4,current_timestamp)",
        [data.first_num, data.second_num, data.operator, data.res], (err, result) => {
            if (!err) {
                console.log("Inserted");
            }
            else {
                console.log(err);
            }
            
        });
}
else {
    res.send('Oops!! select operation')
}
});
// Navigation
app.get('/index', (req, res) => {
    client.query("Select * from user_cal ", (err, result) => {
        if (!err) {
            res.render('index', { 'items': result.rows }
            
        );
            res.send(result.rows);
        }
    })

});


//app.listen(9000,(res)=>{
    //console.log("Server running at Port 9000")
//})

//creating the server and client
//const client = require('./connection.js')
//const express = require('express');
//const app = express();

// Listen on Port 4000 
app.listen(4000, ()=>{
  console.log("Sever is now listening at port 4000");
})
