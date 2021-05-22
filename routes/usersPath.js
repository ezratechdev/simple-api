const express = require("express");
const { addUser, getUsers , getUser , patchUser , deleteUser } = require("../components/usersComponents");
const Router = express.Router();

//get all users
Router.get("/",getUsers);

//add users to db

Router.post("/",addUser);

//get specific user using id

Router.get("/:id",getUser);

//patch user details

Router.patch("/:id",patchUser);

//delete user
Router.delete("/:id",deleteUser);

module.exports = Router;