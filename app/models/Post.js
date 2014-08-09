'use strict';

module.exports = function (sequelize, DataTypes) {
	var Post = sequelize.define('Post', {
		title: DataTypes.STRING,
		body: DataTypes.TEXT
	}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: false,
    underscored: true,		
	});

	return Post;
};