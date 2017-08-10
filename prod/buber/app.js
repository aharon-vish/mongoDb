const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/buber');
app.use(bodyParser.json());

//app.put('/api',(req,res)=>{
//    res.send({hi:'there'});
//});
//app.delete('/api',(req,res)=>{
//    res.send({hi:'there'});
//});
//app.post('/api',(req,res)=>{
//    res.send({hi:'there'});
//});
routes(app);
module.exports = app;