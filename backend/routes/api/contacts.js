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

// Working, but doesn't find error
// Returns a JSON containing 1 if update succesful
// 
// Jeff can you check it? Thx
router.put('/:id', (req, res) => {

    var contact = {};

    Contact.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err) {
        if (err) {
            contact.status = 0;
            return res.status(404).json({ message: "Contact not found" })
        }
        else {
            contact.status = 1;
        }

        res.json(contact);
    })

});

// route - Delete api/contacts/:id
// desc  - Delete a contact
// access - Public (for now)
router.delete('/:id', (req, res) => {
    Contact.findById(req.body)
        .then(contact => contact.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;