require('dotenv').config();

const express = require('express');
const expresslayouts = require('express-ejs-layouts');

const app = express();
const port = 3000 || process.env.PORT;

//helps passes data from page to page or database
app.use(express.urlencoded ({extended: true}));
app.use(express.json());

//stactic files
app.use(express.static('public'));
app.use(express.static('public'));


//Templeting engine
//Used to start applicaton
app.use(expresslayouts);
app.set('layout','./layouts/main')
app.set('view engine','ejs');

 //Routes
 app.use('/', require('./server/routes/index'));

//  Handle 404
app.use((req, res) => {
    res.status(404).render('404');
});



app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})  