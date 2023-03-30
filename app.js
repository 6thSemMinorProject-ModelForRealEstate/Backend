const cookieParser = require('cookie-parser');
const express = require('express');
const predictionRouter = require('./Routers/prediction');
const authRouter = require('./Routers/authRouter');
const houseRouter = require('./Routers/houseRouter');
require('./Models/DBConnection')

const app = express();
app.listen(process.env.PORT || 3000);
app.use(express.json())
app.use(cookieParser());

app.use('/prediction', predictionRouter);
app.use('/auth', authRouter);
app.use('/house', houseRouter);