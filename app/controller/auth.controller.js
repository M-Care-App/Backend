const express = require('express');
const baseResponse = require('../../config/baseResponse');

const login = (req, res) => {
  const { email, password } = req.body;

  try {
  } catch (err) {
    res.statusMessage = err && 'Login Error';
    res.status(404).send(
      baseResponse({
        status: 404,
        message: res.statusMessage,
      }),
    );
  }
};

const authController = {};

module.exports = authController;
