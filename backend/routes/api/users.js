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
// descr -  a User
// access - Public

router.post('/', (req, res) => {
    const credentials = req.body;

    User.findOne(credentials)
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

// router - POST api/users
// descr - Create a User
// access - Public

router.post('/register', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    newUser.save().then(user => res.json(User));
})

module.exports = router;