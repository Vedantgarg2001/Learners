const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const router = express.Router()
const { body} = require('express-validator');

router.post('/signup', [
      body('name').isLength({ min: 3 }),
      body('email').isEmail(),
      body('password').isLength({ min: 5 })
], async (req, res) => {
      let success = false;
      try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                  return res.status(400).send('Enter a unique email')
            }
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            user = await User.create({
                  name: req.body.name,
                  password: hashPassword,
                  email: req.body.email
            });
            success = true;
            res.json({success,user})
      }
      catch (error) {
            console.error(error.message)
            res.status(500).send('Some error occured')
      }
})
// Validation checks for name, email, and password using express-validator

  // Check if the email already exists in the database
  // If yes, return an error response

  // Generate a salt and hash the password
  // Create a new user record in the database with the provided name, hashed password, and email

  // Send a success response with the newly created user
  // If an error occurs, send a 500 error response
router.post('/login', [
      body('email').isEmail(),
      body('password').exists()
], async (req, res) => {
      let success = false;
      
      const { email, password } = req.body
      try {
            const user = await User.findOne({ email })
            if (!user) {
                   return res.status(400).send('Enter correct credientials')
            }
            const passcompare = await bcrypt.compare(password, user.password)  
            if (!passcompare) {
                  return res.status(400).send('Enter correct credientials')
            }
            success = true;
            res.json({ success })
      } catch (error) {
            console.error(error.message)
            res.status(500).send('Some error occured')
      }
})
// Validation check for email and password using express-validator

  // Find the user by email in the database
  // If the user does not exist, return an error response

  // Compare the provided password with the hashed password stored in the database
  // If the passwords don't match, return an error response

  // Send a success response indicating successful authentication
  // If an error occurs, send a 500 error response
module.exports = router


