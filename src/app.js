const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Connect BD
const dburl = 'mongodb+srv://CRUD:JNAkGS4x9ZJKPGrU@cluster0.4zkgy.mongodb.net/crudbd?retryWrites=true&w=majority';
mongoose.connect(dburl, {useCreateIndex:true, useNewUrlParser: true}).then(db => console.log('Db conected')).catch(err => console.log(err));

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
