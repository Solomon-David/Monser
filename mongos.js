const mongoose=require("mongoose")

const url=process.env.MONGODB_URI|| "mongodb://127.0.0.1:27017"
//const url="mongodb+srv://SolomonDavid:SolomonDavidAkesobia@friends.xgwi7iz.mongodb.net/profiles?retryWrites=true&w=majority"

const dbname="profiles"

mongoose.connect(`${url}/${dbname}`, {useNewUrlParser:true})

const Person= mongoose.model("Friends",{
    fname:{type:String},
    lname:{type:String},
    gender:{type:String},
    skill:{type:String},
    age:{type:Number},
    password:{type:String,
     }
})

console.log(`Mongoose database started for ${dbname} at ${url}`)

/*const josh=new Person({
    name:"Joshua",
    place:"RSUST",
    skill:"Programming",
    level:200
})

josh.save().then(()=>{
    console.log("We have added another item.")
}).catch((err)=>{console.log(err)})
*/
//console.log(Person)

module.exports=Person;
