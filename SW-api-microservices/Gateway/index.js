const express = require("express");
const morgan = require("morgan");
const server = express();
const {createProxyMiddleware} = require("http-proxy-middleware");

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
    res.status(404).send('UPS in Gateway');
});
PORT = 8000;

server.listen(PORT, () => {console.log(`Gateway in port ${PORT}`)});