const Class = require('../models/Class');

exports.createClass = async (req, res) => {
    const newClass = await Class.create(req.body);
    res.status(201).json(newClass);
};

exports.deleteClass = async (req, res) => {
    await Class.destroy({ where: { id: req.params.id } });
    res.status(204).end();
};

exports.updateClass = async (req, res) => {
    const updatedClass = await Class.update(req.body, { where: { id: req.params.id } });
    res.json(updatedClass);
};

exports.patchClass = async (req, res) => {
    const patchedClass = await Class.update(req.body, { where: { id: req.params.id } });
    res.json(patchedClass);
};

exports.getAllClasses = async (req, res) => {
    const classes = await Class.findAll();
    res.json(classes);
};

exports.getClassById = async (req, res) => {
    const singleClass = await Class.findByPk(req.params.id);
    res.json(singleClass);
};

exports.getClassesByQueryString = async (req, res) => {
    const classes = await Class.findAll({ where: req.query });
    res.json(classes);
};

exports.getClassesByComplexQueryString = async (req, res) => {
    // Implementação dependerá do tratamento dos operadores de consulta complexos
};

module.exports = exports;
