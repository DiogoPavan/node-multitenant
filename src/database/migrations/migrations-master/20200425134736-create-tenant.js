module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tenant', {
      tenant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tenant_slug: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      db_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      db_host: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      db_username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      db_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      db_port: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('tenant');
  },
};
