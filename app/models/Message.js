'use strict';

var faker = require('faker');

module.exports = function (sequelize, DataTypes) {
	var Message = sequelize.define('Message', {
		content: DataTypes.TEXT
	}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: false,
    underscored: true,
    classMethods: {
      associate: function(models) {
        var User = models.User;

        Message.belongsTo(User, {
          as: 'Receiver',
          foreignKey: 'receiver_id'
        });

        Message.belongsTo(User, {
          as: 'Author',
          foreignKey: 'author_id'
        });        

        User.hasMany(Message, { 
          foreignKey: 'author_id'
        });        

        User.hasMany(Message, { 
          foreignKey: 'receiver_id'
        });
      }
   	},
   	tableName: 'messages'
	});

	return Message;
};