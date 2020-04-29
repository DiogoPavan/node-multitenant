import Umzug from 'umzug';
import Sequelize from 'sequelize';

import Tenant from '../models/models-master/Tenant';
import databaseTenant from '../config/databaseTenant';

class MigrateService {
  async run(req, res) {
    try {
      const tenants = await Tenant.findAll({ raw: true });

      for (let tenant of tenants) {
        const sequelize = new Sequelize(databaseTenant(tenant));

        const umzug = new Umzug({
          migrations: {
            path: '/usr/src/app/src/database/migrations/migrations-db',
            params: [sequelize.getQueryInterface(), Sequelize],
          },
          storage: 'sequelize',
          storageOptions: { sequelize },
        });

        await umzug.up();

        console.log(
          `Migration tenant ${tenant.tenantSlug} executado com sucesso`
        );
      }

      return res
        .status(200)
        .send({ message: 'Migration executado com sucesso' });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ message: 'Erro no migration', err });
    }
  }
}

export default new MigrateService();
