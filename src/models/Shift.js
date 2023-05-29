const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Shift extends Model {}

Shift.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    period: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'Shift',
    timestamps: false
});

module.exports = Shift;
