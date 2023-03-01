require('dotenv').config()
// isse jitne mei secret hai env file mei we can access it...

const express=require('express')
const app=express()
const ejs=require('ejs')
const path=require('path')
const expresslayout=require('express-ejs-layouts')
const PORT=process.env.PORT || 3000
const mongoose=require('mongoose')
const session=require('express-session')
const flash=require('express-flash')
const MongoDbStore = require('connect-mongo')
const MongoStore = require('connect-mongo')
const passport=require('passport')

// yahan M capital as either it is a class or constructor function

// database connection
// const url=; 

mongoose.connect('mongodb://localhost:27017/taste_on_way', { useNewUrlParser: true}).
catch(error => handleError(error));
const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('Database connected...');
// }).catch(err => {
//     console.log('Connection failed...')
// });
// mongoose.connection.on('error', err => {
//     logError(err);
//   });


  // session store

//   let mongoStore = new MongoDbStore({
//     mongooseConnection: connection,
//     collection: 'sessions'
// })  



  // session config

app.use(session({
  secret:process.env.COOKIE_SECRET,
  resave:false,
  store:MongoStore.create({
    mongoUrl:'mongodb://localhost:27017/taste_on_way'
  }),
  saveUninitialized:false,
  cookie:{maxAge:1000*60*60*24}     //24hrs
  

}))
// passport config
const passportInit=require('./app/config/passport.js')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

//assets
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// global middlewares

app.use((req,res,next)=>{
  res.locals.session = req.session
  res.locals.user=req.user
  next()

})



// set template engine
app.use(expresslayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

require('./routes/web')(app)
// why not full path and public????????


app.listen(3000,()=>{
    console.log(`listening on port ${PORT}`)
    // for using $port we dont use"" we use ``????why????
})


