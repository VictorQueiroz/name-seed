'use strict';

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('User', {
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
    	},

    	email: {
    		type: DataTypes.STRING,
         unique: true
    	},

    	password: {
    		type: DataTypes.STRING
    	},

    	username: {
    		type: DataTypes.STRING,
        unique: true
    	}
    }).complete(done());
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('User').complete(done());
  }
};