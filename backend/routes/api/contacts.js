const express = require('express');
const router = express.Router();

const Contact = require('../../models/Contact');

router.post('/', (req, res) => {
Contact.find(req.body)
        .sort({ firstName: -1 })
        .then(Contacts => res.json(contacts))
})
router.post('/add', (req,res) => {
    const newContact = new Contact ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        email: req.body.email,
        userId: req.body.userId 
    });

    newContact.save().then(contact => res.json(Contact));
});

// Work in Progress
router.patch('/:id', (req, res) => {
    Contact.findByIdAndUpdate(req.params.id)
});


// route - Delete api/contacts/:id
// desc  - Delete a contact
// access - Public (for now)
router.delete('/:id', (req, res) => {
    Contact.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true})))
        .catch(err => res.status(404).json({ success: false}))
})

module.exports = router;