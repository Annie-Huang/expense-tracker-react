// Common.js syntax:

const path = require('path');

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

// When adding morgan, you will see this in terminal when a api is called.:
//  GET /api/v1/transactions 304 2439.893 ms - -
// It has the method, url, return code, time during info.
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// app.get('/', (req, res) => res.send('Hello'));
app.use('/api/v1/transactions', transctions);

// Make sure you do this part after you api route in line 30
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
