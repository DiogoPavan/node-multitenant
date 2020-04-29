import User from '../models/models-db/User';
import { getConnectionBySlug } from '../infra/connectionManager';

class UserService {
  async insert(req, res) {
    const user = await getConnectionBySlug(req.tenantSlug).transaction(
      async t => {
        return User.create(req.body, { transaction: t });
      }
    );
    console.log(user);
    return res.json(user);
  }

  async findAll(req, res) {
    const user = await getConnectionBySlug(req.tenantSlug).transaction(
      async t => {
        return User.findAll({
          transaction: t,
        });
      }
    );

    return res.json(user);
  }
}

export default new UserService();
