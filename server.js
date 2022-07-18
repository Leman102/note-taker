// Dependencies
const express = require('express');

// app use express
const app = express();

//the require() statements will read the index.js file in each directory
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// creating environment variable port
const PORT = process.env.PORT || 3001;


//call multiple css and js files (from the public folder)
app.use(express.static('public'))

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// routes to route files
app.use(apiRoutes);
app.use('/', htmlRoutes);


// app listener - starts the server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
