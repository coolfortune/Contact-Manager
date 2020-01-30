const express = require('express');
const router = express.Router();

const Login = require('../../../frontend/src/components/Login');
// 
router.post('/', async(req, res) => {
    // incoming: login, password
    // outgoing: id, firstName, lastName, error

    var error = "";

    const { login, password } = req.body;
    var id = -1;
    var fn = "";
    var ln = "";

    

})