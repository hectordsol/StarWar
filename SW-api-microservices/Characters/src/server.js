const express = require('express');
const morgan = require('morgan');
//const router = require('./routes') esta es una manera de usar router luego server.use(router)
const server = express();

server.use(morgan('dev'));

server.use(express.json());
server.use('/characters',require('./routes')); // otra manera de usar router
server.use('*',(req, res)=>{
    res.status(404).send('Not Found');
});
server.use((err,req,res,next)=>{
    res.status(err.statusCode ||500).send(
        {
            error:true,
            message: err.message,
        });
});
module.exports = server;