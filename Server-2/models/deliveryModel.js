const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const deliverySchema = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String,
        trim: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    category: {
        type: String
    },
    rename: {
        type: String
    },
    phn: {
        type: String
    },
    pua: {
        type: String
    },
    time: {
        type: String
    },
  });
  const delivery = mongoose.model('delivery', deliverySchema);

module.exports = delivery;
  