'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category', [{
      id: 1,
      category: 'Music',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 2,
      category: 'Sport',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 3,
      category: 'Culture',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 4,
      category: 'Party',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category');
  }
};
