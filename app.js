const cookieParser = require('cookie-parser');
const express = require('express');
const predictionRouter = require('./Routers/prediction');

const app = express();
app.listen(3000);
app.use(express.json())
app.use(cookieParser());

app.use('/prediction', predictionRouter);