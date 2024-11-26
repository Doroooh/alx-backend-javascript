import { AppController } from '../controllers/AppController'; // Import the App Controller
import { StudentsController } from '../controllers/StudentsController'; // Import the Student controller

const express = require('express'); // Import the Express library
const apiRouter = express.Router(); // Create a new Express router instance

// Define the route for the home page, handled by HomeController
apiRouter.get('/', AppController.displayHomepage);

// Define the route for retrieving student data, with an optional major filter
apiRouter.get('/students/:major?', StudentsController.fetchStudents);

export default apiRouter; // Export the router for use in the main application
