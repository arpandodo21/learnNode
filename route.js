const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log(`Hello world`)
})

// to capture get request
app.get('/', (req, res) => {
   res.send("<h1>Welcome to Home page</h1>");
});
app.get('/about', (req, res) => {
   res.send("<h1>About page</h1>");
});
app.get('/gallery', (req, res) => {
   res.send("<h1>Gallery page</h1>");
});
app.get('/about/user', (req, res) => {
   res.send("<h1>User page</h1>");
});
// -------------- R O U T E   P A R A M E T E R -----------------------
// app.get('/user/:userid', (req, res) => {
//    res.send(`The user id is: ${req.params.userid}`);
// });
// app.get('/user/:userid-:empid', (req, res) => {
//    res.send(`The user id is: ${req.params.userid} and Employee ID is: ${req.params.empid}`);
// });
// -------------- R O U T E   P A R A M E T E R   E N D -----------------------

// -------------- Q U E R Y   P A R A M E T E R -----------------------
app.get('/search',(req,res) => {
    const name = req.query.name
    const age = req.query.age

    res.send(`Name: ${name}, Age: ${age}`)
})