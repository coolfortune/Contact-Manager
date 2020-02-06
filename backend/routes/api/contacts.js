const express = require('express');
const router = express.Router();

const Contact = require('../../models/Contact');

// route - Search api/contacts/:id
// desc  - Searches for a contact
// access - Public
router.get('/:id', (req, res) => {

const id = { userId: req.params.id };

console.log(id);

Contact.find(id)
        .sort({ firstName: -1 })
        .then(contacts => res.json(contacts))
        .catch(err => console.log(err))
})

// route - Update api/contacts/:id
// desc  - Updates a contact
// access - Public
router.post('/:id', (req, res) => {

const id = { userId: { $in: req.params.id }};
const payload = { ...req.body, ...id};

console.log(payload);

Contact.find(payload)
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

    newContact.save()
              .then(contact => res.json(contact))
              .catch(err => console.log(err))
});

// route - Updates api/contacts/:id
// desc  - Updates the fields of a contact
// access - Public
router.put('/:id', (req, res) => {

    Contact.findByIdAndUpdate(req.body._id, req.body, {new: true})
           .then(contact => {
               if(!contact) {
                   res.json({ success: false })
               } else {
                   res.json({ success: true })
               }})
           .catch(err => console.log(err))
});

// route - Delete api/contacts/:id
// desc  - Deletes a contact
// access - Public
router.delete('/:id', (req, res) => {

    console.log(req.body)
    Contact.findById(req.body)
        .then(contact => contact.remove().then(() => res.json({ success: true })))
        .catch(err => res.json({ success: false }))
});

module.exports = router;