const express        = require('express');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const app            = express();
const Item           = require('./models/items');
const flash          = require('connect-flash')


require('dotenv').config()
require('./db/db')
// console.log("PEP:",process.env.PORT)

const itemsController = require('./controllers/items');
const usersController = require('./controllers/users');

app.use(session({
  secret: 'keepitsecret',
  resave: false,
  saveUninitialized: false
}))
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use((req,res, next)=> {
//   console.log("req.ses",req.session)
  if (!req.session.logged)
  {
    req.session.userId = null;
  }
//   console.log('app.use route')
  // console.log("res.loc.ses:",res.locals.session)

  res.locals.session = req.session

//   console.log("res.loc.ses:",res.locals.session)
  next();
})

app.use(flash());
app.use('/items', itemsController);
app.use('/users', usersController);

app.get('/', async (req, res) => {
  console.log(`a visit from ${req.session.userId}`)
  const items = await Item.find()
  const highVote = await mostLiked(items)
  const lowVote = await leastLiked(items)
  console.log("highVote",highVote)
  console.log("lowVote", lowVote)
  res.render('index.ejs', {
    items: items,
    highVote: highVote,
    lowVote: lowVote

  });
 });

 app.listen(process.env.PORT, () => {
  console.log('listening..... on port' + process.env.PORT);

});


const mostLiked = (items) => {
  let maxPhoto= {}
  let max = 0;
    for (let i = 0; i < items.length; i++){
    if(items[i].likes.length > max){
        maxPhoto = items[i]
        max = items[i].likes.length
    }
  }
  return maxPhoto
 }


 const leastLiked = (items) => {
  let minPhoto= {}
  let min = 0;
    for (let i = 0; i < items.length; i++){
    if(items[i].dislikes.length > min){
        minPhoto = items[i]
        min = items[i].dislikes.length
    }
  }
  return minPhoto
 }
