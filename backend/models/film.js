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
    toJSON(){
      return { ...this.get(), id: undefined, directorId: undefined}
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
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      released: {
        type: DataTypes.DATE,
        allowNull: false
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
