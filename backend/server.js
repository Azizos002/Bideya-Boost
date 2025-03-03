const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express()

const port = process.env.PORT
const dataBase = process.env.DATABASE_URI

//Connect to DATABASE
mongoose
    .connect(dataBase)
    .then(() => {
        console.log('mongoDB Connected...');
    })
    .catch((err) => {
        console.error('Error Connecting  to MongoDB : ', err)
    })

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bideya Boost is HEREEE!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});