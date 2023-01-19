'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,},
    tag: {
      type: DataTypes.STRING,
      allowNull: false,},
    published: {
      type: DataTypes.DATE,
      allowNull: false,},
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,}
  }, {
    sequelize,
    tableName: 'books',
    modelName: 'Book',
  });
  return Book;
};