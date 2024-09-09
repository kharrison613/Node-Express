const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// GET 
router.get('/', (req, res) => {
  res.json(userModel.getAll());
});

// POST 
router.post('/', (req, res) => {
  const user = userModel.create(req.body);
  res.status(201).json(user);
});

// GET 
router.get('/:id', (req, res) => {
  const user = userModel.getById(req.params.id);
  user ? res.json(user) : res.status(404).send('User not found');
});

// PUT 
router.put('/:id', (req, res) => {
  const updatedUser = userModel.update(req.params.id, req.body);
  updatedUser ? res.json(updatedUser) : res.status(404).send('User not found');
});

// DELETE 
router.delete('/:id', (req, res) => {
  const user = userModel.delete(req.params.id);
  user ? res.json(user) : res.status(404).send('User not found');
});

module.exports = router;
