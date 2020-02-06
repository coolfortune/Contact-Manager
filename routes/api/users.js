const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// User Model
const User = require("../../models/User");

// router - POST api/users
// descr -  Reads an exisiting user
// access - Public

router.post("/", (req, res) => {
	User.find(req.body)
		.then(user => res.json(user))
		.catch(err => console.log(err));
});

// router - POST api/users/register
// descr - Creates a new User
// access - Public

router.post("/register", (req, res) => {
	const newUser = new User({
		username: req.body.username,
		password: req.body.password
	});

	// Add salt and hash
	bcrypt.genSalt(5, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err) throw err;
			newUser.password = hash;
			newUser
				.save()
				.then(user => {
					res.json({
						user: {
							username: user.username,
							password: user.password
						}
					});
				})
				.catch(err => console.log(err));
		});
	});

	//newUser.save()
	//       .then(user => res.json(user))
	//       .catch(err => console.log(err))
});

// router - POST api/users/login
// descr  - Login to user
// access - User access
router.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	User.findOne({ username }).then(user => {
		if (!user) {
			return res.status(404).json({ usernameNotFound: "Username not found" });
		} else {
			bcrypt.compare(password, user.password, function(err, match) {
				if (match) return res.json(user._id);
				else
					return res.json({ incorrectPassword: "Incorrect password entered." });
			});
		}
	});
});

module.exports = router;
