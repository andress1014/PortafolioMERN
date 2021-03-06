const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const { API_VERSION } = require('./config');

//Load routing
const userRoutes = require('./routers/user.routes');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configure Header HTTP
//....



//Router Basic
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;