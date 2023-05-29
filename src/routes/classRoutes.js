
const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Rotas mínimas a serem implementadas:
router.post('/', classController.createClass); // criação de um objeto
router.delete('/:id', classController.deleteClass); // exclusão de um objeto
router.put('/:id', classController.updateClass); // atualização de todo o objeto
router.patch('/:id', classController.patchClass); // atualização de alguns atributos do objeto
router.get('/', classController.getAllClasses); // recuperação de todos os objetos
router.get('/:id', classController.getClassById); // recuperação de um objeto pelo seu id
router.get('/query', classController.getClassesByQueryString); // recuperação de um objeto por uma query string simples
router.get('/complexQuery', classController.getClassesByComplexQueryString); // recuperação de um objeto por uma query string complexa

module.exports = router;
