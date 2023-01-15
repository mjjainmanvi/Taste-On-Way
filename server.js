const express=require('express')
const app=express()
const ejs=require('ejs')
const path=require('path')
const expresslayout=require('express-ejs-layouts')
const PORT=process.env.PORT || 3000

//assets
app.use(express.static('public'))



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
