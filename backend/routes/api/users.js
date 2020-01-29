const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// router - GET api/users
// descr - GET all users
// access - Public
router.get('/', (req, res) => {
    User.find()
        .sort({ name: -1 })
        .then(Users => res.json(Users))
})

// router - POST api/users
// descr - Create a User
// access - Public

router.post('/', (req, res) => {
        
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        userID: req.body.userID,
        password: req.body.password
    });

    newUser.save().then(user => res.json(User));
})

module.exports = router;