const mongoose=require("mongoose")
<<<<<<< HEAD
//const url=process.env.MONGODB_URI 
const url= "mongodb://127.0.0.1:27017"
//const url="mongodb+srv://SolomonDavid:SolomonDavidAkesobia@friends.xgwi7iz.mongodb.net/profiles?retryWrites=true&w=majority"
const Schema=mongoose.Schema({
 owner:{type:Number},   
=======
const friend=require("./mongos.js")

const url=process.env.MONGODB_URI 
//const url= "mongodb://127.0.0.1:27017"
//const url="mongodb+srv://SolomonDavid:SolomonDavidAkesobia@friends.xgwi7iz.mongodb.net/profiles?retryWrites=true&w=majority"
const Schema=mongoose.Schema({
 owner:{type:mongoose.Schema.Types.ObjectId},   
>>>>>>> a1d05e6293076e9e7cab71fbb9e0bc76c7ae8bcc
 name:{type:String,
    required:true},
    type:[String],
    extension:[String],
    size:{type:Number}
})

//setting file sizes
Schema.virtual("sizeInKB").get(function(){
    return `${(this.size)/1024}KB`;
})
Schema.virtual("sizeInMB").get(()=>{
    return `${(this.size)/(Math.pow(1024,2))}`
})

//adding file owners
Schema.virtual("poster", {
<<<<<<< HEAD
 ref:"friends",
=======
 ref:"Friends",
>>>>>>> a1d05e6293076e9e7cab71fbb9e0bc76c7ae8bcc
 localField:"owner",
 foreignField:"_id",
})

const File=mongoose.model("Files", Schema)
<<<<<<< HEAD
=======
Schema.statics.show=async ()=>{

    
}


>>>>>>> a1d05e6293076e9e7cab71fbb9e0bc76c7ae8bcc


console.log("Database for files has started running at"+url)

<<<<<<< HEAD
module.exports=File
=======
module.exports={File, Schema}
>>>>>>> a1d05e6293076e9e7cab71fbb9e0bc76c7ae8bcc
