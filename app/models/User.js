'use strict';

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('User', {
		name: DataTypes.STRING,
		username: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			isEmail: true
		},
		password: DataTypes.STRING,

		fb_id: { // Facebook
			type: DataTypes.STRING
		},

		go_id: { // Google
			type: DataTypes.STRING
		},

		tw_id: { // Twitter
			type: DataTypes.STRING
		},

		gh_id: { // Github
			type: DataTypes.STRING
		}
	}, {
		freezeTableName: true,
		timestamps: true,
		paranoid: false,
		underscored: true,
    classMethods: {
      associate: function(models) {
      	var Post = models.Post;
      	var Role = models.Role;

				Post.belongsTo(User);
				Role.belongsTo(User);

				User.hasMany(Post);
				User.hasMany(Role);
      }
   	}
	});

	return User;
};