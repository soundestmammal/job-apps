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
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({ email });

        if(!user) {
            res.status(400).send();
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if(!isMatch) {
            res.status(400).send();
        }

        res.send("It worked!")
        console.log("This login attempt worked...")
    } catch(e) {
        res.status(500).send();
    }
    
})

module.exports = router;