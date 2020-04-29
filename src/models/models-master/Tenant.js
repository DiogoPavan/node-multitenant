import { Model, DataTypes } from 'sequelize';

class Tenant extends Model {
  static init(sequelize, configs) {
    super.init(
      {
        tenantId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          field: 'tenant_id',
        },
        tenantSlug: {
          type: DataTypes.STRING,
          field: 'tenant_slug',
        },
        dbName: {
          type: DataTypes.STRING,
          field: 'db_name',
        },
        dbHost: {
          type: DataTypes.STRING,
          field: 'db_host',
        },
        dbUsername: {
          type: DataTypes.STRING,
          field: 'db_username',
        },
        dbPassword: {
          type: DataTypes.STRING,
          field: 'db_password',
        },
        dbPort: {
          type: DataTypes.INTEGER,
          field: 'db_port',
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

export default Tenant;
