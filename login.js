const router=require("express").Router()
const friend=require("./mongos.js")
const bcrypt=require("bcryptjs")
const tohbs=require("./tohbs.js")
const fs=require("fs")
const uploads=require("./uploads.js")

router.use("/upload/",uploads)

    router.post("/", (req,res)=>{
                tohbs("home")
    var fname=req.body.fname
    var lname=req.body.lname
    var pass=req.body.pass
    //console.log(fname+"\n"+lname+"\n"+pass)
    friend.find({fname:fname}, async (err,finds)=>{
        if(err){console.log(err)}
        for(var find of finds){
                if(find.lname==lname){
    console.log(`User found: fname=${find.fname}, lname=${find.lname}, pass=${find.password}`)
        
               await bcrypt.compare(pass,find.password, (err,mat)=>{
                if(err){console.log(err)}    
           if(mat){
        //        console.log(mat)
            res.render("home",{
                    id:find._id,
                    fname:find.fname,
                    lname:find.lname,
                    gender:find.gender,
                    skill:find.skill,
                    age:find.age
    })
    console.log("Logged in successfully")
           }
        else{
            res.end("The password and profile did not match")
            console.log("The password is not a match");
        }
})
break;
            }
        else{
            res.end("An error occurred. Unable to log in.")
            console.log("Unable to log in")
            //console.log(find)
        }
      }  })
    })

    /*router.post("/upload", (req,res)=>{
        res.send("File is to be uploaded")
    })*/


module.exports=router