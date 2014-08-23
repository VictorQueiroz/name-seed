'use strict';

module.exports = function (sequelize, DataTypes) {
	var Conversation = sequelize.define('Conversation', {
		title: DataTypes.STRING(255)
	}, {
		tableName: 'conversations',
    freezeTableName: true,
    timestamps: true,
    paranoid: false,
    underscored: true,
    classMethods: {
      associate: function (models) {
        var User = models.User;

        // Conversation members.
        User.hasMany(Conversation, {
          as: 'Conversation',
          foreignKey: 'conversation_id',
          through: 'conversation_members'
        });

        Conversation.hasMany(User, {
          as: 'Members',
          foreignKey: 'member_id',
          through: 'conversation_members'
        });        
      }
    }
  });

  return Conversation;
};