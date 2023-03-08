const Order=require('../../../models/order')
const moment=require('moment')

function orderController(){
     
    return {
        store(req,res){
            // validate request
            const {phone , address}=req.body
            if(!phone || !address){
req.flash('error','All fields are required')
return res.redirect('/cart')
            }

            // create order
            const order=new Order({
                CustomerID:req.user._id,
                items:req.session.cart.items,
                phone:phone,
                address:address

            })

            // console.log(req.body)
            // console.log(order)

            order.save().then(result =>{
                req.flash('success','Order placed successfully')
                delete req.session.cart
                return res.redirect('/customer/orders')

            }).catch(err=>{
                req.flash('error','Somethong went wrong')
                return res.redirect('/cart')
            })

        },
       async index(req,res){
        const orders=await Order.find({CustomerID:req.user._id},null,{sort:{createdAt: -1}})
        // error if without login access???????????????/!!!!!!!!!!!!!!!!
        // find function parameters https://www.geeksforgeeks.org/mongoose-find-function/????????????????/
        res.header('Cache-Control', 'no-store')
        // isse back jaake wapis aane pe order placed sucesfully wlaa nhi aata?????????why ar iska kch bad code bhi tha ye shoet h
res.render('customers/orders',{orders:orders , moment:moment})
        // console.log(orders)

        }
    }
}

module.exports=orderController