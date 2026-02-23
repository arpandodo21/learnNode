const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running properly...");
});

app.set('view engine', 'ejs');

// passing objects from send method
// app.get('/', (req, res) => {
//     res.send(
//         {
//             name : "Arpan",
//             age : 32
//         }
//     )
// });

//passing array as a response from send method
// app.get("/",(req,res)=>{
//     res.send(
//         ['apple','orange','watermelon']
//     )
// })

//using json method to send objects as a response
app.get("/", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Arpan",
      age: 32,
    },
    {
      id: 2,
      name: "Sangita",
      age: 29,
    },
    {
      id: 3,
      name: "Abhimanyu",
      age: 18,
    },
  ];

  res.json(users);
});


app.get("/user",(req,res)=>{
    res.render('user',{name:"Arpan"})
})
