const server = require('./src/server');

PORT = 8002;

server.listen(PORT, ()=>{console.log(`Server Films in port ${PORT}`)});