const express = require('express');
const router = express.Router();
const shiftController = require('../controllers/shiftController');

// Rotas mínimas a serem implementadas:
router.post('/', shiftController.createShift); // criação de um objeto
router.delete('/:id', shiftController.deleteShift); // exclusão de um objeto
router.put('/:id', shiftController.updateShift); // atualização de todo o objeto
router.patch('/:id', shiftController.patchShift); // atualização de alguns atributos do objeto
router.get('/', shiftController.getAllShifts); // recuperação de todos os objetos
router.get('/:id', shiftController.getShiftById); // recuperação de um objeto pelo seu id

module.exports = router;
