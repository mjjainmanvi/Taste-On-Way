const authController = require('../app/http/controllers/authController')
const homecontroller =require('../app/http/controllers/homecontroller')
const cartController = require('../app/http/controllers/customers/cartController')
const orderController=require('../app/http/controllers/customers/orderController')
const adminOrderController=require('../app/http/controllers/admin/orderController')
const statusController=require('../app/http/controllers/admin/statusController')

// yshan hsame recieve ho rha jo humne rxport kra ha
// middlewares
const auth = require('../app/http/middlewares/auth')
const guest = require('../app/http/middlewares/guest')
const admin = require('../app/http/middlewares/admin')

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

// customer routes
    app.post('/orders', auth ,orderController().store)
    app.get('/customer/orders',auth, orderController().index)
    app.get('/customer/orders/:id',auth, orderController().show)
    // here : represnts dynamic nature

    // admin routes
    app.get('/admin/orders',admin, adminOrderController().index)
    app.post('/admin/order/status',admin, statusController().update)

}

module.exports=initRoutes

