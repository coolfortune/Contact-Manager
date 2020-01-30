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
<<<<<<< HEAD
        
=======
    const existingUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    existingUser.save().then(user => res.json(User));
})

// router - POST api/users
// descr - Create a User
// access - Public

router.post('/register', (req, res) => {
>>>>>>> 74ee995a9a9dac7b1a6cd0cccd1ffa4c56dbb888
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    newUser.save().then(user => res.json(User));
})

module.exports = router;