const express = require('express');
const router = express.Router();

const Contact = require('../../models/Contact');

router.get('/', (req, res) => {
    Contact.find()
        .sort({ firstName: -1 })
        .then(Contacts => res.json(contacts))
})

router.post('/', (req,res) => {
    const newContact = new Contact ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        email: req.body.email
    });

    newContact.save().then(contact => res.json(Contact));
})

module.exports = router;