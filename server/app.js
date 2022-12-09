var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

var indexRouter = require('./routes/index');
var todoRoute = require('./routes/todo');

var app = express();
app.use(cors({
    origin: '*'
}));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/todo/',todoRoute);



//connection to db
// mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb+srv://paulrossadmin:Twyfelhoek123@cluster0.lltffrp.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
console.log("Connected to db!");
});



module.exports = app;
