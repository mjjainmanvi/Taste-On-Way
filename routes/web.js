const authController = require('../app/http/controllers/authController')
const homecontroller =require('../app/http/controllers/homecontroller')
const cartController = require('../app/http/controllers/customers/cartController')

// yshan hsame recieve ho rha jo humne rxport kra ha
// middlewares
const auth = require('../app/http/middlewares/auth')
const guest = require('../app/http/middlewares/guest')

function initRoutes(app){
   
    

    // function(req,res){
    //     res.render('home')
    // }
    app.get('/', homecontroller().index)         
    app.get('/login',guest,authController().login)
    app.post('/login',authController().postLogin)
    app.get('/register',guest,authController().register)
    app.post('/register',authController().postRegister)
    app.post('/logout',authController().logout)
    

    app.get('/cart',cartController().index)
    app.post('/update-cart',cartController().update)
    
}

module.exports=initRoutes