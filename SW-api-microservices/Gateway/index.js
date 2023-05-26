const express = require("express");
const morgan = require("morgan");
const server = express();
const {createProxyMiddleware} = require("http-proxy-middleware");
require('dotenv').config();
const {CORS} = process.env;
console.log("cors: ", CORS);
server.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', CORS); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(morgan("dev"));
server.use('/characters', createProxyMiddleware
   (
    {
	target:"http://characters:8001",
	changeOrigin:true
    }
   )
);
server.use('/films', createProxyMiddleware
   (
    {
	target:"http://films:8002",
	changeOrigin:true
    }
   )
);
server.use('/planets', createProxyMiddleware
   (
    {
	target:"http://planets:8003",
	changeOrigin:true
    }
   )
);
server.use('*',(req, res)=>{
    res.status(405).send('UPS in Gateway');
});
PORT = 8000;

server.listen(PORT, () => {console.log(`Gateway in port ${PORT}`)});