// req express
const express = require ('express');
const app = express();
// files
const fs = require("fs");
// port
const port = 4001;

let day = new Date().getDay();
let hour = new Date().getHours();

app.use((req, res, next )=>{
    if (day < 1 && day >= 6 && hour < 9 && hour < 17){
        res.send('sorry, this web application is closed untill monday at 9am');

    }else{
        next();

    }
});


//creating a router





// crreating a server
app.listen (port,(req, res) => {
    console.log(`server is running on ${port}...`)
})