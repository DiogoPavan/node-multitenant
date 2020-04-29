import Tenant from '../models/models-master/Tenant';

class TenantController {
  async insert(req, res) {
    const tenantExists = await Tenant.findOne({
      where: { tenantSlug: req.body.tenantSlug },
    });

    if (tenantExists) {
      return res.status(400).json({ error: 'Tenant já existe' });
    }

    const tenant = await Tenant.create(req.body);

    return res.json(tenant);
  }

  async findAll(req, res) {
    const tenants = await Tenant.findAll();

    return res.json(tenants);
  }
}

export default new TenantController();
