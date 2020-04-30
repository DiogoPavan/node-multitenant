import { Model, DataTypes } from 'sequelize';

class City extends Model {
  static init(sequelize, configs) {
    super.init(
      {
        cityId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          field: 'user_id',
        },
        cityName: {
          type: DataTypes.STRING,
          field: 'first_name',
        },
      },
      {
        sequelize,
        ...configs,
      }
    );

    return this;
  }
}

export default City;
