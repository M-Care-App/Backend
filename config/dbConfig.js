const config = {
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_CLUSTER: process.env.DB_CLUSTER,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
};

const DB_URL = `${config.DB_HOST}://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_CLUSTER}/${config.DB_NAME}`;

module.exports = {
  ...config,
  DB_URL,
};
