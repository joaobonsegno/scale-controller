const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const database = require('./src/config/database.json');

// Inicializing the App
const app = express();
app.use(express.json());
app.use(cors());

// Inicializing database
mongoose.connect(database.url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

requireDir('./src/model');

// Routes
app.use('/api', require('./src/routes'));

app.listen(3002);