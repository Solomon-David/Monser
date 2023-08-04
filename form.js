const express=require("express")
const router=express.Router()
const fs=require("fs")
const friend=require("./mongos.js")
const bcrypt=require("bcryptjs")


router.get("/", function form(req,res, next){
let url=`${__dirname}/files/form.html`
fs.createReadStream(url).pipe(res)
})

router.post("/", async(req,res)=>{
    var r=req.body
   async function hashpass(p){
        let result=await bcrypt.hash(p,8)
        console.log("Hashing complete")
        return result
    }
    const hashed= await hashpass(r.pass)
  //  const hashed= await bcrypt.hash(r.pass,8)
    console.log(typeof(hashed))
    

friend.find({fname:r.fname, lname:r.lname}, function(err,item){
    if(err){console.log(err)}

    if(item[0]==null){
        var solo =new friend({
            fname:r.fname,
            lname:r.lname,
            gender:r.gender,
            skill:r.skill,
            age:r.age,
            password:hashed
        })
        
        solo.save().then(()=>{
            console.log(`${req.body.fname} ${req.body.lname} has been added to the database`)
res.end(`${req.body.fname} ${req.body.lname} has been added as a user.`)        
        }).catch((err)=>console.log(err))
    }
    else{
        res.end("This user already exists.")
console.log(`user already exists`)
    }
})

})

module.exports=router