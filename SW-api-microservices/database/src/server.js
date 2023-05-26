const express = require("express");
const morgan= require("morgan");
const cookieParser = require('cookie-parser');
const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cookieParser());
const {MONGO_URI} = process.env;

server.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', MONGO_URI); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.use(require("./routes"));
server.use('*',(req, res)=>{
    res.status(404).send('UPS database');
});
module.exports = server;