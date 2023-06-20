const mongoose = require('mongoose');

const User = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  photo_profile: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  username: {
    type: String,
    default: null,
  },
});

User.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model('user', User);
