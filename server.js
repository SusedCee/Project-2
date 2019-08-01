const express        = require('express');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const app            = express();
const flash          = require('connect-flash')

require('dotenv').config()
require('./db/db')
console.log("PEP:",process.env.PORT)

const itemsController = require('./controllers/items');
const usersController = require('./controllers/users');


// app.use(session({
//   secret: 'THIS IS A RANDOM SECRET STRING',
//   resave: false, // only save the cookie when, we
//   // add something or delete something from it
//   // mutate it
//   saveUninitialized: false // don't save the cookie
//   // until the user has "logged in" legal reasons
//   // as well, you're not supposed to track user data
//   // until the user has logged in to an app
// }));

app.use(session({
  secret: 'keepitsecret',
  resave: false,
  saveUninitialized: false
}))
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use((req,res, next)=> {
  console.log("req.ses",req.session)
  if (!req.session.logged)
  {
    req.session.userId = null;
  }
  console.log('app.use route')
  // console.log("res.loc.ses:",res.locals.session)

  res.locals.session = req.session
    
  // req.session.message= null

  console.log("res.loc.ses:",res.locals.session)
  next();
})



app.use(flash());
app.use('/items', itemsController);
app.use('/users', usersController);

app.get('/', (req, res) => {
  console.log(`a visit from ${req.session.userId}`)
  res.render('index.ejs', {
  });
});

app.listen(process.env.PORT, () => {
  console.log('listening..... on port 3000');
});
