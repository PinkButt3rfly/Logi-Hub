const user = require('../models/userloginModel');
const delivery = require('../models/deliveryModel');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');


const createUser = async (req, res) => {
    const { email, password } = req.body;
    data = {
      email: email,
      password: password
    }
    try {
      const create_user = await user.create(data).catch(error => {
        console.log('Error creating user', error);
        
      }); 
      res.json({ message: 'User created successfully', user:create_user });
    } catch (error) {
      console.error('Error creating user:', error);
      res.json({ message: 'Internal server error' });
    
  } 
  
};
//////
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const getuser = await user.findOne({email:email});
  
    if (!getuser) {
      return res.json({ message: 'Invalid email' });
    }
    const passwordMatch = await bcrypt.compare(password, getuser.password);
    if (!passwordMatch) {
      return res.json({ message: 'Invalid password' });
    }
  
    const token = jwt.sign({ userId: getuser._id }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ message: 'Success', token:token})

  } catch (error) {
    console.error('Login error:', error);
    res.json({ message: 'Internal server error' });
  }
};


const getUsers = async (req, res) => {
  const allUsers = await user.find({})
  return res.json({ users: allUsers});
}

const confirmDel = async(req, res) => {
  const { name, email, phone, address, category, rename, phn, pua, time } = req.body;
    data = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      category: category,
      rename: rename,
      phn: phn,
      pua: pua,
      time: time
    }
    try {
      const create_delivery = await delivery.create(data).catch(error => {
        console.log('Error creating Delivery', error);
        
      }); 
      res.json({ message: 'Delivery Created successfully', delivery:create_delivery });
    } catch (error) {
      console.error('Error creating Delivery:', error);
      res.json({ message: 'Internal server error' });
    
  } 
}

module.exports = { createUser, loginUser, getUsers, confirmDel };