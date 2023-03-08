const Order=require('../../../models/order')

function orderController(){
    return {
index(req,res){
    Order.find({status:{$ne:'completed'}},null,{sort:{'createdAt':-1}}).
    populate('CustomerID','-password').exec((err,orders)=>{
        if(req.xhr){
return res.json(orders)
        }
        else{
            return res.render('admin/orders')

        }
       

    })
    // we have use populate FOR fetching whole user from customerid
}

    }
}

// ye function return krega ek object usmei hogi methods

module.exports=orderController