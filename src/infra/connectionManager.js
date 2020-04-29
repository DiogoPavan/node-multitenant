import { getNamespace } from 'continuation-local-storage';

import DatabaseTenant from './DatabaseTenant';

import Tenant from '../models/models-master/Tenant';

let connectionMap;

export const connectAllDb = async () => {
  try {
    const tenants = await Tenant.findAll({ raw: true });

    connectionMap = tenants
      .map(tenant => {
        return {
          [tenant.tenantSlug]: DatabaseTenant.createConnectionByTenant(tenant),
        };
      })
      .reduce((prev, next) => {
        return Object.assign({}, prev, next);
      }, {});

    console.log(connectionMap);
  } catch (e) {
    console.log('error', e);
    return;
  }
};

export const getConnectionBySlug = slug => {
  // console.log(connectionMap ? connectionMap[slug] : null);
  return connectionMap ? connectionMap[slug] : null;
};
