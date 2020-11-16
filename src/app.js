import express, { json } from 'express';
import morgan from 'morgan';
const bodyParse = require("body-parser");
const operationRoute = require("../routes/operations.route");
//inicialization
const app = express();

//middlewars
app.use(morgan('dev'));
app.use(json());
app.use(bodyParse.urlencoded({ extended: true }));


// RUTAS
app.use('/operations',operationRoute);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message, data });
});

/*
import morgan from 'morgan';
const express = require("express");
const bodyParse = require("body-parser");
const operationRoute = require("../routes/operations.route");
const app = express();


app.use(bodyParse.json());
app.use(morgan('dev'));
app.use(bodyParse.urlencoded({ extended: true }));

// RUTAS
app.use('/operations',operationRoute);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message, data });
});*/


module.exports = app;
