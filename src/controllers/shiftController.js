const Shift = require('../models/Shift');

exports.createShift = async (req, res) => {
    const newShift = await Shift.create(req.body);
    res.status(201).json(newShift);
};

exports.deleteShift = async (req, res) => {
    await Shift.destroy({ where: { id: req.params.id } });
    res.status(204).end();
};

exports.updateShift = async (req, res) => {
    const updatedShift = await Shift.update(req.body, { where: { id: req.params.id } });
    res.json(updatedShift);
};

exports.patchShift = async (req, res) => {
    const patchedShift = await Shift.update(req.body, { where: { id: req.params.id } });
    res.json(patchedShift);
};

exports.getAllShifts = async (req, res) => {
    const shifts = await Shift.findAll();
    res.json(shifts);
};

exports.getShiftById = async (req, res) => {
    const singleShift = await Shift.findByPk(req.params.id);
    res.json(singleShift);
};

module.exports = exports;
