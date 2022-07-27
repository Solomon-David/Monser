const express=require("express")
const friend=require("./mongos.js")
const app=express()
const dir=`${__dirname}/files`
const fs=require("fs")
const port=process.env.PORT || 3000
const mongoose=require("mongoose")
//const url=process.env.MONGODB_URI 
const url= "mongodb://127.0.0.1:27017"
//const url="mongodb+srv://SolomonDavid:SolomonDavidAkesobia@friends.xgwi7iz.mongodb.net/profiles?retryWrites=true&w=majority"
const bcrypt=require("bcryptjs")
const readline=require("readline")
const rl=readline.createInterface({input : process.stdin})

//importing routers
const form=require("./form.js")
const login=require("./login.js")


app.use(express.static(dir))
//app.use(form)
app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs")
app.set("views", __dirname+"/files/views")


app.use("/", form)
app.use("/b", login)    


function show(str){
friend.findOne({password:str}, (err,item)=>{
if(err){console.log(err)}
   console.log(item.lname)  
})
}

    

 

    rl.on("line", function(line){
        arr=line.split(" ")
    let n=0
    let coll=arr[n]
    console.log(coll)
    let command=arr[++n]
    let fname=arr[++n]
    let lname=arr[++n]
    let gender=arr[++n]

    //start
    var db=mongoose.connection.db.collection(coll)  
   if(coll=="friends"){
    switch(command){
        case "deleteOne":
        db.deleteOne({fname:fname, lname:lname, gender:gender},function(err, item){
            if(err){console.log(err)}
            console.log("User been deleted.")
        })
        break;
        case "deleteMany":
            db.deleteMany({fname:fname, lname:lname, gender:gender}, function(err, items){
                console.log(items)    
        })

        break;
        case "find":
            db.find({fname:fname, lname:lname, gender:gender}).toArray((err,item)=>{
                console.log("Found:")
            
                console.log(item)
        
        })

        break;
    }
}
    
    //end    
})



app.listen(port, (err)=>{
    console.log(`Started at port ${port}`)
})
