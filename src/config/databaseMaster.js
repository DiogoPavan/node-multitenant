require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST_MASTER,
  database: process.env.DB_NAME_MASTER,
  port: process.env.DB_PORT_MASTER,
  username: process.env.DB_USER_MASTER,
  password: process.env.DB_PASSWORD_MASTER,
  define: {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated',
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
};
