const server = require('./src/server');

PORT = 8003;

server.listen(PORT, ()=>{console.log(`Server Planets in ${PORT}`)});