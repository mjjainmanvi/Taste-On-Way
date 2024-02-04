const Order=require('../../../models/order')
// why at some places capital and some places small
function statusController(){

    return {
        // controller ki mthd hai toh req and res mil jaata hai yahan pr
        update(req,res){
            Order.updateOne({_id: req.body.orderId}, { status: req.body.status }, (err, data)=> {
                // Order.updateOne({_id: req.body.orderId}, { status: req.body.status }, (err, data)=> {
                    // Order.updateOne({_id: req.body.orderID},{status:req.body.status},(err,data)=>{

                if(err){
                    // you can display any flash messages here

                     return res.redirect('/admin/orders')

                }
                
                return res.redirect('/admin/orders')
            
            })
            // callback moongoose ka liya hai ar err ,data parameters hai and req.body ke baad attribute ke naam mei whi name aaega jo form mei name value hai...



        }

    }
}

module.exports=statusController

// const Order = require('../../../models/order')

// function statusController() {
//     return {
//         update(req, res) {
//             Order.updateOne({_id: req.body.orderId}, { status: req.body.status }, (err, data)=> {
//                 if(err) {
//                     return res.redirect('/admin/orders')
//                 }
//                 // Emit event 
//                 // const eventEmitter = req.app.get('eventEmitter')
//                 // eventEmitter.emit('orderUpdated', { id: req.body.orderId, status: req.body.status })
//                 return res.redirect('/admin/orders')
//             })
//         }
//     }
// }

// module.exports = statusController


