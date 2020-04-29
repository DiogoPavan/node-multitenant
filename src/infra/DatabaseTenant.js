import Sequelize from 'sequelize';
import cls from 'continuation-local-storage';

import databaseTenant from '../config/databaseTenant';
import User from '../models/models-db/User';

const models = [User];

class DatabaseTenant {
  createConnectionByTenant(tenant) {
    const connection = new Sequelize(databaseTenant(tenant));

    models
      .map(model => {
        const tableName = model.name
          .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
          )
          .map(x => x.toLowerCase())
          .join('_');

        return model.init(connection, { tableName });
      })
      .map(model => model.associate && model.associate(connection.models));

    return connection;
  }
}

export default new DatabaseTenant();
