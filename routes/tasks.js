const express = require('express');
const router = express.Router();

//import controllers
const {createTask} = require("../controllers/createTask");

const {getTask,getTaskById} = require("../controllers/getTask");

const{updateTask} = require("../controllers/updateTask");

const{deleteTask} = require("../controllers/deleteTask");


//define API routes
router.post("/task",createTask);

router.get("/task",getTask);

router.get("/task/:id",getTaskById);

router.put("/task/:id",updateTask);

router.delete("/task/:id",deleteTask);

module.exports= router;