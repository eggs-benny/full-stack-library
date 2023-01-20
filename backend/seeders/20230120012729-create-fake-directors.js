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
        name: 'Steven Spielberg',
        nationality: 'American',
        DOB: "1948-12-18 00:00:00",
        uuid: "73059e72-bb04-44e1-91b5-f867974dee74",
        createdAt: "2023-01-01 00:00:00",
        updatedAt: "2023-01-01 00:00:01",
   
      }, 
      {
        name: 'Baz Luhrmann',
        nationality: 'Australian',
        DOB: "1962-09-17 01:00:00+01",
        uuid: "73059e72-bb04-44e1-91b5-f867974dee75",
        createdAt: "2023-01-02 00:00:00",
        updatedAt: "2023-01-02 00:00:01",
    
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('directors', null, {});
  }
};
