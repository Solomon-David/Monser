const express=require("express")
<<<<<<< HEAD
//const friend=require("./mongos.js")
=======
const friend=require("./mongos.js")
>>>>>>> a1d05e6293076e9e7cab71fbb9e0bc76c7ae8bcc
const app=express()
const dir=`${__dirname}`
const fs=require("fs")
<<<<<<< HEAD
const port=3030
const path =require('path')
const cors=require('cors')
//const mongoose=require("mongoose")
//const url=process.env.MONGODB_URI 
//const url= "mongodb://127.0.0.1:27017"
//const url="mongodb+srv://SolomonDavid:SolomonDavidAkesobia@friends.xgwi7iz.mongodb.net/profiles?retryWrites=true&w=majority"
//const bcrypt=require("bcryptjs")
=======
const port=process.env.PORT || 3000
const mongoose=require("mongoose")
//const url=process.env.MONGODB_URI 
const url= "mongodb://127.0.0.1:27017"
//const url="mongodb+srv://SolomonDavid:SolomonDavidAkesobia@friends.xgwi7iz.mongodb.net/profiles?retryWrites=true&w=majority"
const bcrypt=require("bcryptjs")
>>>>>>> a1d05e6293076e9e7cab71fbb9e0bc76c7ae8bcc
const readline=require("readline")
const rl=readline.createInterface({input : process.stdin})

//importing routers
<<<<<<< HEAD
//onst form=require("./form.js")
//const login=require("./login.js")

app.use(cors({origin: 'http://localhost:8080'}))
app.use(express.static(dir))
//app.use(form)
app.use(express.urlencoded({extended:true}))
//app.set("view engine","hbs")
//app.set("views", __dirname+"/files/views")


//app.use("/", form)
//app.use("/b", login)    


/*function show(str){
=======
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
>>>>>>> a1d05e6293076e9e7cab71fbb9e0bc76c7ae8bcc
friend.findOne({password:str}, (err,item)=>{
if(err){console.log(err)}
   console.log(item.lname)  
})
}

    

 

    rl.on("line", function(line){
        arr=line.split(" ")
    let n=0
<<<<<<< HEAD
    let coll=arr[n].toLowerCase
=======
    let coll=arr[n]
    console.log(coll)
>>>>>>> a1d05e6293076e9e7cab71fbb9e0bc76c7ae8bcc
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
<<<<<<< HEAD
})*/


app.post("/login", (req,res)=>{
    info=req.body.info
    pass=req.body.pass

    res.send(`Trying to log in ${info} using ${pass}`)
})

app.get('/login', function (req,res){
    res.json({'message' : 'Hi'})
    //res.sendFile(path.join(dir,'/index.html'))
=======
>>>>>>> a1d05e6293076e9e7cab71fbb9e0bc76c7ae8bcc
})



app.listen(port, (err)=>{
    console.log(`Started at port ${port}`)
})
