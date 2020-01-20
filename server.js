const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://jeff:cop4331@contact-manager-dvnjt.mongodb.net/small-project?retryWrites=true&w=majority";

const app = express();

const client = new MongoClient(url);
client.connect();

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req,res) => {
    try {
    const db = client.db();
    const results = await db.collection('Users').find().toArray();
    res.send(results);
    } catch(err) {
        console.log(err);
    }
});

app.listen(3000);
