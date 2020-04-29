import Sequelize from 'sequelize';
import cls from 'continuation-local-storage';

import Tenant from '../models/models-master/Tenant';

export default async (req, res, next) => {
  const { host } = req.headers;
  const tenantSlug = host.split('.')[0];
  const tenant = await Tenant.findOne({ where: { tenantSlug } });

  if (!tenant) {
    return res.json({ message: `Tenant não existe na base` });
  }

  req.tenant = tenant;
  req.tenantSlug = tenantSlug;

  next();
};
