require('dotenv').config();

const express = require('express');

const port = process.env.PORT || 8000;

const db = require('./config/mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));

const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log('error', err);
    }
    console.log('server is running on port', port);
})