const user = require('../models/userloginModel');
const jwt = require('jsonwebtoken')




const createUser = async (req, res) => {
    const { email, password } = req.body;
    data = {
      email: email,
      password: password
    }
    try {
      //const user = new User({ email, password });
      //await user.save();
      await user.insertMany(data).catch(error => {
        console.log('Error creating user', error);
        
      }); 
      res.json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.json({ message: 'Internal server error' });
    
  } 
  
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  
  try {
    
    const getuser = await user.findOne({email:email});
    console.log(getuser);
  
    if (!getuser) {
      return res.json({ message: 'Invalid email' });
    }
    const passwordMatch = await bcrypt.compare(password, getuser.password);
    if (!passwordMatch) {
      return res.json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ userId: getuser._id }, 'your-secret-key', { expiresIn: '1h' });
    res.json({ token });
    res.json({ message: 'Login succesful'})
  } catch (error) {
    console.error('Login error:', error);
    res.json({ message: 'Internal server error' });
  }
};

module.exports = { createUser, loginUser };