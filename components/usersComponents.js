const uuid = require("uuid").v4;
//mock database -- you can link to mongo db
var users = [
    {
        name: "Ezra",
        age: 19,
        id: "6eea0d5b-c5db-4fea-99bb-6f31dce4ff3a"
    },
    {
        name: "Tester",
        age: 18,
        id: "6eea0d5b-c5db-4fea-99bb-6f31dce4ff3a"
    }
];

const addUser = (req,res)=>{
    let user = {...req.body , id:uuid()};
    users.push(user);
    res.send(users).status(200);
};

const getUsers = (req,res)=>{
    res.send(users).status(200);
};

const getUser = (req,res)=>{
    let id = req.params.id;
    let user = users.find(user => user.id == id);
    res.status(200).send(user);
};

const patchUser = (req,res)=>{
    let id = req.params.id;
    let { name , age } = req.body;
    let user = users.find(user => user.id == id);
    name ? user.name = name : null;
    age ? user.age = age : null;
    res.send(users).status(200);
};

const deleteUser = (req,res)=>{
    let id = req.params.id;
    users = users.filter(user => user != id);
    res.status(200).send(users);
};

module.exports = { addUser, getUsers , getUser , patchUser , deleteUser };