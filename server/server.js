// require express gives us a function
const express = require('express');

// create an instance of express by calling the function returned above
// this gives us an object
const app = express();

// Common port for servers to listen on
const port = 5000;

// express static file serving. public is the folder name
app.use(express.static('server/public'));

// tell server as a whole to listen
app.listen(port, () => {
    console.log('listening on port', port);
});