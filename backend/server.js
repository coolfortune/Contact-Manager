const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const url = "mongodb+srv://jeff:cop4331@contact-manager-dvnjt.mongodb.net/small-project?retryWrites=true&w=majority";

const users = require('./routes/api/users');
const contacts = require('./routes/api/contacts');


const app = express();

const db = require('./config/keys.js').mongoURI;

mongoose.connect(db)
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err));



// Bodyparser Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', users);

app.get('/', async (req,res) => {
    try {
    const results = await mongoose.connection.db.collection('users').find().toArray();
    res.send(results);
    } catch(err) {
        console.log(err);
    }
})


app.listen(3000);
