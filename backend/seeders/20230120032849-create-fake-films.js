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

    await queryInterface.bulkInsert('films', [{ 
        uuid: "1e6d38bd-6a4d-4fc7-9f26-b287bea5a9f0",
        title: "Jurassic Park",
        rating: 9,
        released: "1993-09-02T00:00:00.000Z",
        createdAt: "2023-01-20T03:35:18.015Z",
        updatedAt: "2023-01-20T03:35:18.015Z",
        directorId: 1
    }, 
    {  
      uuid: "1e6d38bd-6a4d-4fc7-9f26-b287bea5a9f1",
      title: "E.T.",
      rating: 7,
      released: "1992-06-11T00:00:00.000Z",
      createdAt: "2023-01-10T03:35:18.015Z",
      updatedAt: "2023-01-10T03:35:18.015Z",
      directorId: 1
    }], {});
},

async down (queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
  await queryInterface.bulkDelete('films', null, {});
}
};

