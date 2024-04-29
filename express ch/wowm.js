// require express
const express =require("express");
// req file s
const path = require('path');

const imagePath = path.join(__dirname, './pexels-photo-19330503.webp'); // Replace with the actual path to your image file
const fs =require("fs");
// verif
const v =require("./ver");

// exp to app
const app =express();
// port creation
const port = 4000;




// routes


// home
app.get('/', v, (req, res) =>{
    fs.readFile('./work.html', 'utf-8', (err, data) =>{
        err ? res.end("an ERROR has accurd")&& console.error(err) : res.end(data)
    });
});

app.get('/work.html',v, (req, res) =>{
    fs.readFile('./work.html', 'utf-8', (err, data) =>{
        err ? res.end("an ERROR has accurd")&& console.error(err) : res.end(data)
    });
});


// serv
app.get('/service.html',v, (req, res) =>{
    fs.readFile('./service.html', 'utf-8', (err, data) =>{
        err ? res.end("an ERROR has accurd")&& console.error(err) : res.end(data)
    });
});

// cont
app.get('/contact.html',v, (req, res) =>{
    fs.readFile('./contact.html', 'utf-8', (err, data) =>{
        err ? res.end("an ERROR has accurd")&& console.error(err) : res.end(data)
    });
});

// css
app.get('/work.css',v, (req, res) =>{
    fs.readFile('./work.css', 'utf-8', (err, data) =>{
        err ? res.end("an ERROR has accurd")&& console.error(err) : res.end(data)
    });
});

// photos
app.use('/pexels-photo-19330503.webp', express.static(path.join(__dirname, './pexels-photo-19330503.webp')));
app.use('/87390.png', express.static(path.join(__dirname, './87390.png')));
app.use('/black-gradient-background-ji5n1dg53r1ygu5m.jpg', express.static(path.join(__dirname, './black-gradient-background-ji5n1dg53r1ygu5m.jpg')));
app.use('/facebook-logo-264A8EFBA1-seeklogo.com.png', express.static(path.join(__dirname, './facebook-logo-264A8EFBA1-seeklogo.com.png')));
app.use('/mail-envelope-symbol-logo-4AB011B4E0-seeklogo.com.png', express.static(path.join(__dirname, './mail-envelope-symbol-logo-4AB011B4E0-seeklogo.com.png')));
app.use('/pexels-photo-13967665.webp', express.static(path.join(__dirname, './pexels-photo-13967665.webp')));
app.use('/pexels-photo-414029.webp', express.static(path.join(__dirname, './pexels-photo-414029.webp')));
app.use('/pexels-photo-4164651.jpg', express.static(path.join(__dirname, './pexels-photo-4164651.jpg')));
app.use('/pexels-photo-6999258.webp', express.static(path.join(__dirname, './pexels-photo-6999258.webp')));
app.use('/sport-activities-running-icon-17.png', express.static(path.join(__dirname, './sport-activities-running-icon-17.png')));
app.use('/whatsapp-logo-112413FAA7-seeklogo.com.png', express.static(path.join(__dirname, './whatsapp-logo-112413FAA7-seeklogo.com.png')));

// out 
app.get('./out.html',v,  (req, res) =>{
    fs.readFile('./out.html ', 'utf-8', (err, data) =>{
        err ? res.end("an ERROR has accurd")&& console.error(err) : res.end(data);
    });
});
// server
app.listen(port, (req,res) => {
    console.log(`server is running :port ${port}...`)
})



