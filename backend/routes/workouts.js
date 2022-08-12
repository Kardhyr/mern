const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController');

const router = express.Router()

// POST a new workout
router.post('/', createWorkout);


// GET all Workouts
router.get('/', getWorkouts);


// GET a single Workout
router.get('/:id', getWorkout);


// UPDATE a workout
router.patch('/:id', updateWorkout);


// DELETE a workout
router.delete('/:id', deleteWorkout);


module.exports = router;