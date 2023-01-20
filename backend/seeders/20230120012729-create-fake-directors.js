'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
     await queryInterface.bulkInsert('directors', [{
        name: 'John Doe',
        nationality: 'British',
        DOB: "2000-01-01 01:00:00+01",
        uuid: "9a9078e3-5108-426d-884b-dfed3c63d81c",
        createdAt: "2023-01-01 00:46:20.839+00",
        updatedAt: "2023-01-01 00:46:21.839+00",
   
      }, 
      {
        name: 'Jane Doe',
        nationality: 'French',
        DOB: "2001-01-01 01:00:00+01",
        uuid: "9a9078e3-5108-426d-884b-dfed3c63d82e",
        createdAt: "2023-01-02 00:46:20.839+00",
        updatedAt: "2023-01-02 00:46:21.839+00",
    
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
