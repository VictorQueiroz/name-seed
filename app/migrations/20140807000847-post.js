'use strict';

module.exports = {
	up: function(migration, DataTypes, done) {
		migration.createTable('Post', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},

			createdAt: {
				type: DataTypes.DATE
			},

			updatedAt: {
				type: DataTypes.DATE
			},

			title: {
				type: DataTypes.STRING
			},

			body: {
				type: DataTypes.TEXT
			}
		}).complete(done());
	},
	down: function(migration, DataTypes, done) {
		migration.dropTable('Post').complete(done());
	}
};