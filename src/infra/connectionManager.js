import DatabaseTenant from './DatabaseTenant';

import Tenant from '../models/models-master/Tenant';

let connectionMap;

export const connectAllDb = async () => {
  try {
    const tenants = await Tenant.findAll({ raw: true });

    connectionMap = tenants
      .map(tenant => {
        return {
          [tenant.tenantSlug]: new DatabaseTenant(tenant),
        };
      })
      .reduce((prev, next) => {
        return Object.assign({}, prev, next);
      }, {});
  } catch (e) {
    console.log('error', e);
    return;
  }
};

export const getConnectionBySlug = slug => {
  return connectionMap ? connectionMap[slug] : null;
};
