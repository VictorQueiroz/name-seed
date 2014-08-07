'use strict';

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('User', {
		name: DataTypes.STRING,
		username: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
	}, {
		freezeTableName: true,
		timestamps: true,
		paranoid: false,
		underscored: true,
		associate: function (models) {
			User.hasMany(models.Role);
			User.hasMany(models.Post);
		}
	});

	return User;
};