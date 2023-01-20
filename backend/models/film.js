'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Director }) {
      // define association here
      this.belongsTo(Director, { foreignKey: 'directorId', as: 'director' });
    }
    toJSON() {
      return { ...this.get(), id: undefined, directorId: undefined };
    }
  }
  Film.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Film must have a title' },
          notEmpty: { msg: 'Title must not be empty' }
        }
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Film must have a rating' },
          notEmpty: { msg: 'Rating must not be empty' }
        }
      },
      released: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: 'Film must have a release date' },
          notEmpty: { msg: 'Release date must not be empty' }
        }
      }
    },
    {
      sequelize,
      tableName: 'films',
      modelName: 'Film'
    }
  );
  return Film;
};
