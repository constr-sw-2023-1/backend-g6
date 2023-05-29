module.exports = function errorHandlingMiddleware(err, req, res, next) {
    const isProduction = process.env.NODE_ENV === 'production';

    let errorMessage = {};

    // Se for um erro do Sequelize
    if(err.name && err.name === 'SequelizeValidationError'){
        errorMessage = err.errors.map(error => ({ field: error.path, message: error.message }));
        return res.status(400).json({ errors: errorMessage });
    }

    // Se for um erro do Joi
    if(err.isJoi === true){
        errorMessage = err.details.map(error => ({ field: error.path[0], message: error.message }));
        return res.status(400).json({ errors: errorMessage });
    }

    // Erro não tratado
    errorMessage = isProduction ? 'Ocorreu um erro interno no servidor.' : err.stack;
    console.error(err);
    res.status(500).send(errorMessage);
}
