'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [
      {
        id: 1,
        value: 'USER',
        description: 'Users',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        value: 'ADMIN',
        description: 'Admins',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
