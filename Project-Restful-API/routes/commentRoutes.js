const express = require('express');
const router = express.Router();

// Example route for GET all comments
router.get('/', (req, res) => {
  res.send('Get all comments');
});

// Example route for POST a new comment
router.post('/', (req, res) => {
  res.send('Create a new comment');
});

// Example route for GET a comment by ID
router.get('/:id', (req, res) => {
  res.send(`Get comment with ID ${req.params.id}`);
});

// Example route for PUT update a comment by ID
router.put('/:id', (req, res) => {
  res.send(`Update comment with ID ${req.params.id}`);
});

// Example route for DELETE a comment by ID
router.delete('/:id', (req, res) => {
  res.send(`Delete comment with ID ${req.params.id}`);
});

module.exports = router;
