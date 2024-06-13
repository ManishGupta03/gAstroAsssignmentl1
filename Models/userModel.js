const mongoose=require("mongoose")
const bcrypt = require('bcrypt');
require('dotenv').config();

const userSchema=new mongoose.Schema({
    name:{ type:String, required:true },
    email:{type:String, required:true, unique:true},
    username: {type: String, required: true, unique: true },
    password:{type:String, required:true }
})

// //Hashing the Password
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){ return next(); }
    try {
    const saltRounds = parseInt(process.env.SALT, 10); // Ensure SALT is an integer
    this.password=await bcrypt.hash(this.password,saltRounds);
    next();
    }catch (error) {
        next(error);
      }

})
//Comparing the Password
userSchema.methods.comparePassword=async function(enteredPassword){
   return await bcrypt.compare(enteredPassword,this.password)
}

module.exports = mongoose.model('User', userSchema);