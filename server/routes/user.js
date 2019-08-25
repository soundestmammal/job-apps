const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const router = new express.Router();

router.get('/', (req, res) => {
    res.send("test-get-test");
})

// Add a new User and save
router.post('/user', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.send(user);
    } catch(e) {
        res.status(500).send(e);
    }
});

router.post('/login', async (req, res) => {
 try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await User.generateAuthToken();
        res.send({ user, token });
    } catch(e) {
        res.status(500).send();
    }
});

module.exports = router;