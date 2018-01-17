'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Tasks', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userId: {
				type: Sequelize.INTEGER
			},
			title: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			status: {
				type: Sequelize.STRING 
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
				// defaultValue: Sequelize.NOW()
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE,
				// defaultValue: Sequelize.NOW()
			},
			//timestamp: true
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Tasks');
	}
};