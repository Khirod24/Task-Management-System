//create server
const express = require("express");
const app = express();

//load config from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());


// import routes for TODO API 
const taskRoutes= require("./routes/tasks");
//mount the todo API routes
app.use("/api/v1",taskRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the DB
const databaseConnect=require("./config/database");
databaseConnect();

//default Route
app.get("/",(req,res)=>{
    res.send(`<h1> THIS IS A HOMEPAGE </h1>`);
})