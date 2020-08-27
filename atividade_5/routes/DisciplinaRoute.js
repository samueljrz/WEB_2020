const express = require('express');
const route = express.Router();
const disciplinaService = require('../services/DisciplinaService');

route.get('/list', function(req, res) {
  return res.json(disciplinaService.list());
});

route.post('/register', function(req, res) {
  const disciplina = disciplinaService.register(req.body);
  return res.json(disciplina);
});

route.put('/update/:id', function(req, res) {
  const disciplina = disciplinaService.update(req.params.id, req.body);
  return res.json(disciplina);
});

route.delete('/delete/:id', function(req, res) {
  const ok = disciplinaService.delete(req.params.id);
  if(ok) return res.json({"success": true});
  return res.json({"success": false});
});

route.get('/retrieve/:id', function(req, res) {
  const disciplina = disciplinaService.retrieve(req.params.id);
  return res.json(disciplina);
});

module.exports = route;