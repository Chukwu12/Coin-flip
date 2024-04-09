const express = require('express');
const fs = require('fs');
const figlet = require('figlet');

const app = express();
const PORT = 3000;

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Serve static files (images)
app.use('/images', express.static(__dirname + '/images'));

//  Serve Css files
app.use('/css', express.static(__dirname + '/css'));
//  Serve JS files 
app.use('/js', express.static(__dirname + '/js'));
// Handle 404 errors
app.use((req, res) => {
    figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}!`);
});
