const mongoose=require('mongoose')
const menuSchema=new mongoose.Schema({
    name:{type:String , required:true},
    image:{type:String , required:true},
    price:{type:Number , required:true},
    size:{type:String , required:true}
})
// image store nhi krte ahi haesha path store krte ahi


// haesha nam ka first letter capital rkho......in bts this will be aved as all lowercase and plauralise

module.exports=mongoose.model('Menu',menuSchema)