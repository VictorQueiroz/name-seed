'use strict';

module.exports = {
	up: function(migration, DataTypes, done) {
		migration.createTable('Role', {
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

			name: {
				type: DataTypes.STRING
			}
		}).complete(done());
	},
	down: function(migration, DataTypes, done) {
		migration.dropTable('Role').complete(done());
	}
};