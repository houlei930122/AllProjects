

const http = require('http');
const server = http.createServer((request, response) => {
    console.log('there is a request');
    response.end('a response from server111');
});
server.listen(3000);
