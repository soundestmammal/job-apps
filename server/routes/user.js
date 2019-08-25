const express = require('express');
const User = require('../models/user');


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

module.exports = router;