const http = require('node:http');
const fs = require('fs');

console.log('app running...');

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

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    console.log(req.url);
    if (req.url === '/'){
        res.end(index);
    }
    else if (req.url === '/about'){
        res.end(about);
    }
    else if (req.url === '/contact-me'){
        res.end(contactMe);
    }
    else{
        res.end(notFound);
    }
});

server.listen(8080);