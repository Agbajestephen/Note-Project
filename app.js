require('dotenv').config();

const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const connectDB =require('./server/config/db');
const session = require('express-session');
const passport = require ('passport');
const MongoStore = require('connect-mongo');
const { Mongoose } = require('mongoose');

const app = express();
const port = 3000 || process.env.PORT;

app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store:MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })
}));

app.use(passport.initialize());
app.use(passport.session());

//helps passes data from page to page or database
app.use(express.urlencoded ({extended: true}));
app.use(express.json());

//connect to Database
connectDB();

//stactic files
app.use(express.static('public'));


//Templeting engine
//Used to start applicaton
app.use(expresslayouts);
app.set('layout','./layouts/main')
app.set('view engine','ejs');

 //Routes
 app.use('/', require('./server/routes/auth'));
 app.use('/', require('./server/routes/index'));
 app.use('/', require('./server/routes/dashboard'));

//  Handle 404
app.use((req, res) => {
    res.status(404).render('404');
});



app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})  