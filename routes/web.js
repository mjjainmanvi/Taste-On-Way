const authController = require('../app/http/controllers/authController')
const homecontroller =require('../app/http/controllers/homecontroller')
const cartController = require('../app/http/controllers/customers/cartController')

// yshan hsame recieve ho rha jo humne rxport kra ha

function initRoutes(app){
   
    

    // function(req,res){
    //     res.render('home')
    // }
    app.get('/', homecontroller().index)         
    app.get('/login',authController().login)
    app.get('/register',authController().register)

    app.get('/cart',cartController().index)
    app.post('/update-cart',cartController().update)
    
}

module.exports=initRoutes