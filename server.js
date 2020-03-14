// Common.js syntax:

const express = require('express');
const dotenv = require('dotenv'); // to allow us to create global variable like port, db url
const colors = require('colors'); // allow colors in console.
const morgan = require('morgan'); // for logging.

dotenv.config({path: './config/config.env'});

const app = express();

app.get('/', (req, res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
