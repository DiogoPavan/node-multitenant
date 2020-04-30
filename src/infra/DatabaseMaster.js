import Sequelize from 'sequelize';

import databaseMasterConfig from '../config/databaseMaster';

import Tenant from '../models/models-master/Tenant';

const modelsMaster = [Tenant];

class DatabaseMaster {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseMasterConfig);

    modelsMaster
      .map(model => {
        const tableName = model.name
          .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
          )
          .map(x => x.toLowerCase())
          .join('_');

        return model.init(this.connection, { tableName });
      })
      .map(
        model =>
          model.associate && model.associate(this.connection.modelsMaster)
      );

    this.connection.sync();
  }
}

export default new DatabaseMaster();
