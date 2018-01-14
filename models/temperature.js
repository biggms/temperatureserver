'use strict';
var dto = require('dto');

module.exports = (sequelize, DataTypes) => {
    var Temperature = sequelize.define('Temperature', {
            id: {type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4},
            name: {type: DataTypes.STRING, allowNull: false, unique: true},
            mac: {type: DataTypes.STRING, allowNull: false, unique: true, },
            value: {type: DataTypes.DOUBLE},
        }
    );

    Temperature.Revisions = Temperature.hasPaperTrail();

    Temperature.prototype.toDTO = function () {
        return JSON.stringify(dto.take.only(this.dataValues, ['name', 'value']));
    };

    return Temperature;
};