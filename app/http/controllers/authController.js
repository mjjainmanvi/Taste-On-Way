function authController(){
    // factory functions
        return {
            // index : function(){
    
            // }
            login(req,res){
                res.render('auth/login')
            },
            register(req,res){
                res.render('auth/register')
            }
        }
    }
    
    module.exports=authController