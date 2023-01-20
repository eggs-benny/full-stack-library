'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Film }) {
      // define association here
      this.hasMany(Film, {foreignKey: 'directorId'})
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Director.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false
      },
      DOB: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'directors',
      modelName: 'Director'
    }
  );
  return Director;
};
