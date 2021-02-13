const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err));
});

router.post('/add', (req, res) => {
    const newUser = new User(req.body);

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => console.log(err));
});

module.exports = router;