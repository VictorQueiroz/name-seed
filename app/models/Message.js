'use strict';

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
        var User = models.User,
        Conversation = models.Conversation;

        Message.belongsTo(User, {
          as: 'Author',
          foreignKey: 'author_id'
        });        

        Message.hasMany(Conversation, {
          as: 'Conversation',
          foreignKey: 'conversation_id',
          through: 'conversation_messages'
        });       

        Conversation.hasMany(Message, {
          as: 'Messages',
          foreignKey: 'message_id',
          through: 'conversation_messages'
        });
      }
   	},
   	tableName: 'messages'
	});

	return Message;
};