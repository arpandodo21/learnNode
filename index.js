import express from "express"
const app = express();

app.set("view engine","ejs")

app.listen(3000, () => {
    console.log("Server running properly...");
  });

app.get("/about",(req,res)=>{
    res.render('about',{"title":"About Us","message" : "Welcome to the about us page."})
})
