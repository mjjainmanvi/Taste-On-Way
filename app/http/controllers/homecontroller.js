function homecontroller(){
// factory functions
    return {
        // index : function(){

        // }
        index(req,res){
            res.render('home')
        }
    }
}

module.exports=homecontroller