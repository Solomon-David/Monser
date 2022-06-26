const express=require("express")
const path=require("path")
const friend=require("./mongos.js")
const app=express()
const dir=`${__dirname}/files`
const fs=require("fs")
const port=process.env.PORT||3000
const hbs=require("hbs")
const tohbs=require("./tohbs.js")
const bcrypt=require("bcryptjs")
const readline=require("readline")
const rl=readline.createInterface({input : process.stdin})

app.use(express.static(dir))
app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs")
app.set("views", __dirname+"/files/views")

function form(req,res){
let url=`${dir}/form.html`
fs.createReadStream(url).pipe(res)

//console.log(req.body.fname)
//res.end()
}

app.get("/a",form)



app.post("/a",(req,res)=>{
    var r=req.body
   async function hashpass(p){
        let result=await bcrypt.hash(p,8)
        console.log("Hashing complete")
        return result
    }
    const hashed=hashpass(r.pass)
  //  const hashed= await bcrypt.hash(r.pass,8)
    console.log(typeof(hashed))
    
  /*friend.exists({lname:r.lname}, (err,doc)=>{
if(err){console.log(err)}
if(doc=="null"){

else{
    console.log("This user already exists")
}
})*/

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
        
        }).catch((err)=>console.log(err))
        

        
    }
    else{
console.log("user already exists")
    }
})

})
//show("hi")

async function ismatch(pass, user){
    var match=await bcrypt.compare(pass, user.password)
      //var match=(pass==user.password)
                console.log(user)
                console.log(pass)
                
}

app.post("/b", (req,res)=>{
 //   res.send("hello")
    var fname=req.body.fname
    var lname=req.body.lname
    var pass=req.body.pass
    //console.log(fname+"\n"+lname+"\n"+pass)
    friend.find({fname:fname}, async (err,finds)=>{
        if(err){console.log(err)}
        for(var find of finds){
            //console.log(find.lname)
            if(find.lname==lname){
                   // ismatch(pass, find)
        var mat=await bcrypt.compare(pass, find.password)
                console.log(mat)
                //console.log("password "+pass)
                //console.log(`name: ${fname} ${lname}`)
                res.render("home",{
                    fname:find.fname,
                    lname:find.lname,
                    gender:find.gender,
                    skill:find.skill,
                    age:find.age
    })
    console.log("Logged in successfully")
     break;
            }
        else{
            console.log("Unable to log in")
        console.log(`Fname=${find.fname}, lname=${find.lname}`)
        }
        }
    })

        })    
    


function show(str){
friend.findOne({password:str}, (err,item)=>{
if(err){console.log(err)}
/*res.send(`<div>
    <b>New profile added to data base<b>
    <p>
    ${item}
    </p>
    </div>`)
    */
   console.log(item.lname)

 //  res.end()  
})
}

rl.on("line", function(line){
    arr=line.split(" ")
    fname=arr[1]
    lname=arr[2]
    gender=arr[3]
        switch(arr[0]){
        case "deleteOne":
        friend.findOne({fname:arr[1], lname:arr[2]},function(err, item){
            
            friend.deleteOne().then((del)=>{
                console.log(del)
            })
        })
        break;
        case "deleteMany":
        friend.deleteMany({fname:fname, lname:lname, gender:gender}, function(err, items){
        console.log(items)    
        })

        break;
        case "find":
        friend.find({fname:arr[1], lname:arr[2],gender:arr[3]},(err,item)=>{
            console.log("Found:")
            for(let i of item){
                console.log(i)
            }
        })
        break;
    }
})


app.listen(port, (err)=>{
    console.log(`Started at port ${port}`)
})
