const mongoose = require('mongoose');
const usersSchema=mongoose.Schema({
    userName:{
        type:String,
        require:true,
       
    },
    password:{
        type:String,
        require:true,
        
    },
    email:{
         
        type:String,
        require:true,
        
    },
},{
strict:false,
versionKey :false,
    
})

const user=mongoose.model('users',usersSchema)

module.exports=user;