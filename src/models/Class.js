const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Class extends Model {}

Class.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    numClass: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
