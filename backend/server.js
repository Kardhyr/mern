require('dotenv').config();
const port = process.env.PORT;

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');


// express app
const app = express();


// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


// routes
app.use('/api/workouts', workoutRoutes);


// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(port, () => {
            console.log(`Connected to DB...\nServer is listening on port ${port}...`);
        });
    })
    .catch((error) => {
        console.log(error);
    });


