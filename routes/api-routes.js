// Dependencies

// Grabbing our models

const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/api/todos', (req, res) => {
//change todos in parenthesis
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post('/api/todos', (req, res) => {
//change todos in parenthesis
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete('/api/todos/:id', (req, res) => {
//change todos in parenthesis
  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put('/api/todos', (req, res) => {
//change todos in parenthesis
  });
};
