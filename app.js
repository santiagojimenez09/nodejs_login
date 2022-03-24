const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

app.use('/resources', express.static('public'));
app.use('resources', express.static(__dirname + '/public'));

app.set('view engine','ejs');

const bcryptjs = require('bcryptjs');

const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


app.get('/',(req, res)=>{
    res.send('Hola programacion');
})

app.listen(3000, (req, res)=>{
    console.log('Servidor corriendo en http://localhost:3000');
})