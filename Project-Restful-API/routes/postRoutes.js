const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all posts');
});

router.post('/', (req, res) => {
  res.send('Create a new post');
});

router.get('/:id', (req, res) => {
  res.send(`Get post with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update post with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete post with ID ${req.params.id}`);
});

module.exports = router;
