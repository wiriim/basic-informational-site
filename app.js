const express = require('express');
const app = express();
const fs = require('fs');

let index = '';
let about = '';
let contactMe = '';
let notFound = '';
fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    index = data;    
});
fs.readFile('about.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    about = data;    
});
fs.readFile('contact-me.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    contactMe = data;    
});
fs.readFile('404.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    notFound = data;    
});


app.get('/', (req, res) => res.end(index));
app.get('/about', (req, res) => res.end(about));
app.get('/contact-me', (req, res) => res.end(contactMe));
app.use((req, res) => res.end(notFound));

const PORT = 8080;
app.listen(PORT, (err) => {
    if (err){
        throw err;
    }
    console.log('App running - listening on PORT ' + PORT);
});