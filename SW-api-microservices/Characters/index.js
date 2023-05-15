const server = require('./src/server');

PORT = 8001;

server.listen(PORT, ()=>{console.log(`Server in port ${PORT}`)});