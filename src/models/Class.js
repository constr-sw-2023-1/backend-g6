const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Class extends Model {}

Class.init({
    numClass: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    semester: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    schedule: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    classShiftId: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Class',
    timestamps: false
});

const Shift = require('./Shift'); // Import the Shift model

Class.belongsTo(Shift, { foreignKey: 'classShiftId' });

module.exports = Class;
