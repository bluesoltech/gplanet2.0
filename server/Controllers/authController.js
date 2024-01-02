const User = require('../models/UserSchema');
const Admin = require('../models/AdminSchema');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { name, email, password, cpassword, role } = req.body;

  try {
    let user = null;

    if (role === 'user') {
      user = await User.findOne({ email });
    } else if (role === 'admin') {
      user = await Admin.findOne({ email });
    }

    // Check if user exists
    if (user) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    if (password !== cpassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    const hashPassword = await bcrypt.hash(password, salt);

    // Create and save user
    if (user) {
      user = new User({
        name,
        email,
        password: hashPassword,
        cpassword: hashPassword
      });
    } else if (admin) {
      admin = new Admin({
        name,
        email,
        password: hashPassword,
        cpassword: hashPassword
      });
    }

    await user.save();
    return res.status(200).json({ success: true, message: 'User successfully created' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Internal server error. Try again.' });
  }
};

const login = (req, res) => {
  
};

module.exports = {
  register,
  login
};
