const mongoose=require("mongoose")
//const url=process.env.MONGODB_URI 
const url= "mongodb://127.0.0.1:27017"
//const url="mongodb+srv://SolomonDavid:SolomonDavidAkesobia@friends.xgwi7iz.mongodb.net/profiles?retryWrites=true&w=majority"
const Schema=mongoose.Schema({
 owner:{type:Number},   
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
 ref:"friends",
 localField:"owner",
 foreignField:"_id",
})

const File=mongoose.model("Files", Schema)


console.log("Database for files has started running at"+url)

module.exports=File