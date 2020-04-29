import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize, configs) {
    super.init(
      {
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          field: 'user_id',
        },
        firstName: {
          type: DataTypes.STRING,
          field: 'first_name',
        },
        lastName: {
          type: DataTypes.STRING,
          field: 'last_name',
        },
        email: DataTypes.STRING,
      },
      {
        sequelize,
        ...configs,
      }
    );

    return this;
  }
}

export default User;
