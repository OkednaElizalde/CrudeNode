const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Connect BD
mongoose.connect('mongodb://localhost/crudbd').then(db => console.log('Db conected')).catch(err => console.log(err));

//import routes
const indexRoutes = require('./routes/index');


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));

//routes
app.use('/', indexRoutes);

//Start server
app.listen(app.get('port'), function () {
        console.log('Server on port'+app.get('port'));
    });