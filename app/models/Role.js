'use strict';

module.exports = function (sequelize, DataTypes) {
	var Role = sequelize.define('Role', {
		name: DataTypes.STRING
	}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: false,
    underscored: true,		
	});

	return Role;
};