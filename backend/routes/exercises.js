const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');

router.get('/', (req, res) => {
    Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err));
});

router.post('/add', (req, res) => {
    const newExercise = new Exercise(req.body);

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Exercise.findById(id)
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Exercise.findByIdAndDelete(id)
    .then(() => res.json('Exercise Deleted'))
    .catch(err => console.log(err));
});

router.post('/update/:id', (req, res) => {
    const id = req.params.id;

    Exercise.findById(id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json('Exercise Updated!'))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = router;