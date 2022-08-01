const app = require('./app'); // the actual Express application
const http = require('http');

const server = http.createServer(app);

server.listen(3000, () => {
	console.log('running');
});
