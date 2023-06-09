const Class = require('../models/Class');
const { Op } = require('sequelize');


exports.createClass = async (req, res) => {
    try {

        const newClass = await Class.create(req.body);
        res.status(201).json(newClass);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

exports.deleteClass = async (req, res) => {
    await Class.update({active : false} ,{ where: { id: req.params.id } });
    res.status(204).end();
};

exports.updateClass = async (req, res) => {
    try {
        const updatedClass = await Class.update(req.body, { where: { id: req.params.id } });
        res.json(updatedClass);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
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

function getOperatorAndValueFromQuery(queryValue) {
    const operatorMappings = {
        'eq': Op.eq,   // é equivalente a "=" em SQL
        'neq': Op.ne,  // é equivalente a "<>" ou "!=" em SQL
        'gt': Op.gt,   // é equivalente a ">" em SQL
        'gteq': Op.gte, // é equivalente a ">=" em SQL
        'lt': Op.lt,   // é equivalente a "<" em SQL
        'lteq': Op.lte, // é equivalente a "<=" em SQL
        'like': Op.like // é usado para operações "LIKE" em SQL
    };

    const [operator, value] = queryValue.split('}');
    const op = operatorMappings[operator.slice(1)];

    if (!op) {
        throw new Error(`Operador desconhecido: ${operator}`);
    }

    return [op, value];
}

exports.getClassesByComplexQueryString = async (req, res) => {
    const whereClause = {};

    for (const [key, value] of Object.entries(req.query)) {
        if (value.startsWith('{') && value.includes('}')) {
            const [op, realValue] = getOperatorAndValueFromQuery(value);
            whereClause[key] = { [op]: realValue };
        } else {
            whereClause[key] = value;
        }
    }

    console.log(whereClause)

    try {
        const classes = await Class.findAll({ where: whereClause });

        if (classes.length === 0) {
            return res.status(404).send({
                message: "Não foram encontradas turmas com os parâmetros fornecidos."
            });
        }

        return res.status(200).send(classes);
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Ocorreu um erro ao buscar as turmas."
        });
    }
};

module.exports = exports;
