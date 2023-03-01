const LocalStrategy=require('passport-local').Strategy
// startegy ek class hai
const User=require('../models/user')
const bcypt=require('bcrypt')

function init(passport){
passport.use(new LocalStrategy({usernameField:'email'},async (email,password,done)=>{
    // login
    // check if email exist
    const user=await User.findOne({email:email})
    if(!user){
        return done(null,false,{message:'Username dosnot exist '})
            }
         bcypt.compare(password,user.password).then(match=>{
            if(match){
                return done(null,user,{message:'Loggen IN successfully'})
            }
            return done(null,false,{message:'Wrong username or password'})
         }).catch(err=>{
            return done(null,false,{message:'Something went wrong'})
         })  

}))
// login hone k baad we store email in session
passport.serializeUser((user,done)=>{
    done(null,user._id)
})
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user)
    })

})


}

module.exports=init


