const User = require('../models/UserSchema');
const Admin = require('../models/AdminSchema')
const jwt = require('jsonwebtoken');
const password = require('password-hash-and-salt');

const register = async (req, res) => {
  const { name, email, password, cpassword } = req.body;

  try {
    let user = null

    if (user) {
      user = await User.findOne({ email })
    }
    else if (role == 'admin') {
      user = Admin.findOne({ email })
    }

    //check if user exist
    if (user) {
      return res.status(400).json({ message: "User already exist" })
    }

    //hash password 
    const salt = await bcrypt.genSalt(10)
    if(password != cpassword){
      res.status(400).json({ success: false, message: 'Password do not match' })
    }

    const hashPassword = await bcrypt.hash(password, salt)

    if (role == 'user1') {
      user = new User({
        name,
        email,
        password: hashPassword,
      })
    }
    // if (role == 'admin') {
    //   user = new Admin({
    //     name,
    //     email,
    //     password: hashPassword,
    //     cpassword,
    //   })
    // }
    await user.save()
    res.status(200).json({ success: true, message: 'User successfully created' })
  } catch (error) {
    res.status(200).json({ success: true, message: 'Internal server error, Try again' })
  }
};

const login = (req, res) => {

};


module.exports = {
  register,
  login,
};
