import Sequelize from 'sequelize';

import databaseTenant from '../config/databaseTenant';
import User from '../models/models-db/User';
import City from '../models/models-db/City';

const models = [User, City];

class DatabaseTenant {
  constructor(tenant) {
    this.init(tenant);
  }

  init(tenant) {
    this.connection = new Sequelize(databaseTenant(tenant));

    models
      .map(model => {
        const tableName = model.name
          .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
          )
          .map(x => x.toLowerCase())
          .join('_');

        return model.init(this.connection, { tableName });
      })
      .map(model => model.associate && model.associate(this.connection.models));

    this.connection.sync();
  }
}

export default DatabaseTenant;
