const Menu=require('../../models/menu')
function homecontroller(){
// factory functions
    return {
        // index : function(){

        // }
       async index(req,res){
            // fetch krne k baad saara dat mil jaat ahai ...then execute ho jaat ahia jaise hi data recieve ho jaata ahi 
            // Menu.find().then(function(dishes){
            //     console.log(dishes)
            //     return res.render('home',{dishes:dishes})
            // })

            const dishes=await Menu.find()
            // console.log(dishes)
            return res.render('home',{dishes:dishes})
           
        }
    }
}

module.exports=homecontroller