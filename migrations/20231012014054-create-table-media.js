"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("media", 
    { id: {
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
     },
     image: {
      type: Sequelize.STRING(250),
      allowNull: false
     },
     created_at: {
      type: Sequelize.DATE,
      allowNull: false
     },
     update_at: {
      type: Sequelize.DATE,
      allowNull: false
     }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("media");
  },
};
