const express = require('express');
const router = express.Router();

const Contact = require('../../models/Contact');

router.post('/:id', (req, res) => {
const id = { userId: { $in: req.params.id }};
const payload = { ...req.body, ...id};
console.log(payload);
Contact.find(payload)
        .sort({ firstName: -1 })
        .then(contacts => res.json(contacts))
        .catch(err => console.log(err))
})
router.post('/:id/add', (req,res) => {
    const newContact = new Contact ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        email: req.body.email,
        userId: req.params.id
    });

    newContact.save().then(contact => res.json(Contact));
});

// Work in Progress
router.put('/:id', (req, res) => {
    Contact.find(req.params.id)
           .then()
});

// route - Delete api/contacts/:id
// desc  - Delete a contact
// access - Public (for now)
router.delete('/:id', (req, res) => {
    Contact.findById(req.body)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;