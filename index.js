import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req ,res) =>{
    res.render("index.ejs");
});
app.post("/submit",(req, res)=>{
    var data={
       fname:req.body["Fname"],
       lname:req.body["Lname"],
       age:req.body["Age"],
    };
  res.render("main.ejs",data);
});
app.listen(port ,() =>{
    console.log("Project runnin in port " + port);
});