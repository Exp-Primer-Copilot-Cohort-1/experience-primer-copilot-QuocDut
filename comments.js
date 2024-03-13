// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the comments page
// 4. Create a route for a 404 page
// 5. Start the server

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for the home page
app.get('/', function(req, res) {
    res.send('Welcome to the home page');
});

// 3. Create a route for the comments page
app.get('/comments', function(req, res) {
    res.send('Welcome to the comments page');
});

// 4. Create a route for a 404 page
app.get('*', function(req, res) {
    res.status(404).send('Not found');
});

// 5. Start the server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});


