const { request } = require('express');
const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
} )

module.exports = router