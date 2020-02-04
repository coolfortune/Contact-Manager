const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// User Model
const User = require('../../models/User');

// router - GET api/users
// descr - GET all users
// access - Public

// Don't need a get request of a sorted list of users

/*router.get('/', (req, res) => {
    User.find()
        .sort({ name: -1 })
        .then(Users => res.json(Users))
})*/

// router - POST api/users
// descr -  Reads an exisiting user
// access - Public

router.post('/', (req, res) => {
    User.find(req.body)
        .then(user => res.json(user))
        .catch(err => console.log(err))
});

// router - POST api/users/register
// descr - Creates a new User
// access - Public

router.post('/register', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    // Add salt and hash
    bcrypt.genSalt(5, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
                .then(user => {
                    res.json({
                        user: {
                            username: user.username,
                            password: user.password
                        }
                    });
                });
        });
    });

    //newUser.save()
    //       .then(user => res.json(user))
    //       .catch(err => console.log(err))
});

// Work in Progress:
// Returning UnhandledPromiseRejectionWarning
router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username }).then(user => {
        if(!user) {
            return res.status(404).json({ usernameNotFound: "Username not found"});
        }
        else {
            bcrypt.compare(password, user.password, function(err, match){
                
                if (match)
                    return res.json({ success : true })
                else
                    return res.json({ incorrectPassword: true})
        });
    }});
    
});

module.exports = router;