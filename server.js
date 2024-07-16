// server.js

const express = require('express');
const path = require('path');
const morgan = require('morgan'); // Optional: for logging
const app = express();
const port = 3000;

// Middleware setup
app.use(morgan('dev')); // Use morgan for logging (optional)
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (images, styles)

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render the profile page
app.get('/', (req, res) => {
  const profile = {
    name: 'Rohit Kumar Sah',
    bio: 'Cloud DevOps Engineer.',
    photo: '/images/profile-photo.jpg'  // Path to your profile photo
  };
  res.render('index', { profile });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
