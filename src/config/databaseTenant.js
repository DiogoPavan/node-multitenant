export default function(tenant) {
  return {
    dialect: 'postgres',
    host: tenant.dbHost,
    database: tenant.dbName,
    port: tenant.dbPort,
    username: tenant.dbUsername,
    password: tenant.dbPassword,
    define: {
      timestamps: true,
      createdAt: 'created',
      updatedAt: 'updated',
      underscored: true,
      underscoredAll: true,
      freezeTableName: true,
    },
  };
}
