const express = require("express");
const cors = require("cors");
const Router = require("./routes/usersPath");
const app = express();
const PORT = process.env.PORT || 5000;

//middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/users",Router);
app.use(cors({origin:"*"}));

//
app.get("/",(req,res)=> res.sendFile("index.html",{ root: `${__dirname}/public` }));
app.use((req,res)=> res.sendFile("404.html",{ root: `${__dirname}/public` }));

//listen to server

app.listen(PORT, error => error ? console.log(`INTERNAL ERROR : SERVER CONNECTION : => ${error} \n`) : console.log(`SERVER CONNECTED TO PORT : ${PORT}`));