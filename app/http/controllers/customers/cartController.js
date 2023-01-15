function cartController(){
    // factory functions
        return {
            // index : function(){
    
            // }
            index(req,res){
                res.render('customers/cart')
            },
            
        }
    }
    
    module.exports=cartController