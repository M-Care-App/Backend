const express = require('express');
const authController = require('../controller/auth.controller');

module.exports = (app) => {
  const router = express.Router();

  router.post('/register', authController.register);

  app.use('/api/auth', router);
};
