const express        = require('express');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const app            = express();


require('./db/db');

const itemsController = require('./controllers/itmes');
const usersController = require('./controllers/users');


app.use(session({
  secret: 'THIS IS A RANDOM SECRET STRING',
  resave: false, // only save the cookie when, we
  // add something or delete something from it
  // mutate it
  saveUninitialized: false // don't save the cookie
  // until the user has "logged in" legal reasons
  // as well, you're not supposed to track user data
  // until the user has logged in to an app
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use('/items', itemsController);
app.use('/users', usersController);

app.get('/', (req, res) => {
  res.render('index.ejs', {
    message: req.session.message
  });
});

app.listen(3000, () => {
  console.log('listening..... on port 3000');
});
