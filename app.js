// Import required modules
const express = require('express');
const cors = require('cors');
const { mongoose, db } = require('./models/db'); // Importing mongoose and a database connection instance
const listsRouter = require('./routes/lists'); // Importing a router for 'lists' resource
const tasksRouter = require('./routes/tasks'); // Importing a router for 'tasks' resource
const userRouter = require('./routes/user'); // Importing a router for 'user' resource
const jobRouter = require('./routes/jobpost'); // Importing a router for 'jobpost' resource

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3002;

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Define routes
app.use('/lists', listsRouter); // Use the 'lists' router for paths starting with '/lists'
app.use('/tasks', tasksRouter); // Use the 'tasks' router for paths starting with '/tasks'
app.use('/user', userRouter); // Use the 'user' router for paths starting with '/user'
app.use('/jobpost', jobRouter); // Use the 'jobpost' router for paths starting with '/jobpost'

// Default route
app.use("/", async (req, res) => {
  res.send("hello rahul");
});

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
