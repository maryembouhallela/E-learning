const mongoose=require("mongoose");
const url="mongodb://localhost:27017";
const connect =()=>{
     try{
         mongoose.connect(url)
         console.log("connect with success")
     }catch{
         console.log("connect with failed")
     }
}
module.exports=connect