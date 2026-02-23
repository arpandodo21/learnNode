const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running properly...");
});

app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/about', (req, res) => {
    res.send(req.body)
});
app.get('/hostname', (req, res) => {
    res.send(req.hostname)
});
app.get('/ip', (req, res) => {
    res.send(req.ip)
});
app.get('/url', (req, res) => {
    res.send(req.originalUrl)
});
app.get('/path', (req, res) => {
    res.send(req.path)
});
app.get('/protocol', (req, res) => {
    res.send(req.protocol)
});
app.get('/secure', (req, res) => {
    res.send(req.secure)
});
app.get('/route/:userid', (req, res) => {
    res.send(req.route)
});
app.get('/accept', (req, res) => {
    if(req.accepts('html')){
        res.send("<h1>Hello HTML</h1>")
    }else if(req.accepts('json')){
        res.send("Hello JSON")
    }else if(req.accepts('xml')){
        res.send("<message>Hello XML</message>")
    }else{
        res.send('<h1>Not supported</h1>')
    }
});
app.get('/headers', (req, res) => {
    res.send(req.headers)
});
app.get('/get', (req, res) => {
    res.send(req.get('user-agent'))
});
app.post('/is', (req, res) => {
    
    if(req.is('application/json')){
        res.send("JSON data")
    }else if(req.is('text/html')){
        res.send("HTML data")
    }else{
        res.send("Unsupported data")
    }
});