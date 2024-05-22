const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors')



// Create Express app
const app = express();



app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(cookieParser());

const mongoose = require('mongoose');

const dotenv = require('dotenv');


dotenv.config();







module.exports = app;

