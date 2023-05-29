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

function getOperatorAndValueFromQuery(queryValue) {
    const operatorMappings = {
        'neq': Op.ne,
        'gt': Op.gt,
        'gteq': Op.gte,
        'lt': Op.lt,
        'lteq': Op.lte,
        'like': Op.like
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
