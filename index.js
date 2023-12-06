const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Serve static files from the public folder
app.use(express.static('public'));

// Define route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});