const express=require("express")
const router=express.Router()
const multer=require("multer")
const {File, Schema}=require("./file.js")
const filer=File
const schema=Schema
const friend=require("./mongos.js")
router.use(express.static(__dirname))
const store=multer.diskStorage({
    destination: (req, file, next)=>{
        next(null, "files/uploads")
    },
    filename:(req, file, next)=>{
        next(null, `${file.originalname}`)
    }
})
const upload=multer({storage:store})

router.post("/:id", upload.single("file"), (req,res,next)=>{
    //res.end("File received: "+req.file.filename);
    let owner=req.params.id
    
    let file=req.file
    let fileObject={
     "owner":owner,
    "name" :file.filename,
    "type":file.mimetype,
    "ext":file.filename.split(".")[1],
    "size":file.size}
    ///res.write(`<img src="http://localhost:3000/files/uploads/upload.jpg"  alt=${req.file.path} />`)
   /*res.json({
      /*  "name":file.filename,
        "type":file.mimetype,
        "ext":file.filename.split(".")[1],
        "size":file.size,
        "sizeInKB":(file.size)/1024,
        "sizeInMB":(file.size)/(1024*1024)
        
        ...fileObject
    })*/
      
    console.log(req.file.filename+" at "+req.file.path)
    console.log(`owner:${owner}\n
    name:${file.filename} \n 
    type:${file.mimetype} \n
    ext:${file.filename.split(".")[1]} \n 
    size:${file.size} \n
    sizeInKB:${(file.size)/1024} \n
    sizeInMB:${(file.size)/(Math.pow(1024,2))} `)

  let send=new filer(fileObject)
  send.save()
  .then( async(doc)=>{
      console.log("File added successfully")
    //console.log(l)
const post=await filer.findOne({_id:doc.id}).populate("poster")
    console.log(doc)
    const arr=post.poster[0]
    //console.log(arr.fname)
    
    let response=(`${arr.fname} ${arr.lname} uploaded ${doc.name} which is of type ${doc.type} and occupies ${doc.sizeInKB}`)
    console.log(response)
    res.send(response)
    /*friend.findOne({_id:doc.owner},(err,yes)=>{
        if(err){console.log(err)}
          console.log(yes.fname)
    })*/
})
.catch((err)=>{
    console.log(err)
})

  
})

module.exports=router