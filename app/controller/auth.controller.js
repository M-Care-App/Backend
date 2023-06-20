const express = require('express');
const baseResponse = require('../../config/baseResponse');
const User = require('../model/user.model');
const md5 = require('md5');

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

const register = async (req, res) => {
  const { email, password, name } = req.body;

  const user = new User({
    name,
    email,
    password: md5(password),
  });

  try {
    // Check whether email is used or not
    const requestUniqueEmail = await User.findOne({ email });
    if (requestUniqueEmail) {
      const message = 'Email is used with another user';
      res.statusMessage = message;
      return res.status(401).send(baseResponse({ message, status: 401 }));
    }

    // try save user into db
    const request = await user.save(user);
    res.statusMessage = 'Account Created';
    res.send(
      baseResponse({ message: 'Account created', status: 201, data: request }),
    );
  } catch (err) {
    // failed
    const message = err.toString() || '';
    res.statusMessage = message;
    res.status(401).send(baseResponse({ status: 401, message }));
  }
};

const authController = {
  register,
};

module.exports = authController;
