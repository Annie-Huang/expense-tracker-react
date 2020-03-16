// Common.js syntax:

const express = require('express');
const dotenv = require('dotenv'); // to allow us to create global variable like port, db url
const colors = require('colors'); // allow colors in console.
const morgan = require('morgan'); // for logging.
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

const transctions = require('./routes/transactions');

const app = express();

// Allow use to use the body parser
app.use(express.json());

// app.get('/', (req, res) => res.send('Hello'));
app.use('/api/v1/transactions', transctions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
