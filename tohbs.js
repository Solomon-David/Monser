const { listenerCount } = require("events")
const fs=require("fs")
const readline=require("readline")
const rl=readline.createInterface({input:process.stdin})
const dir=__dirname

//console.log("Started")

/*rl.on("line", (line)=>{
var arr=line.split(" ")
var html=arr[0]
var hbs=arr[1]
console.log(`html: ${html}`)
console.log(`hbs: ${hbs}`)
})*/

function tohbs(f){
    var file=`${__dirname}/files`
    var html=`${file}/${f}.html`
    var hbs=`${file}/views/${f}.hbs`
    var s=""
    fs.createReadStream(html).on('error', function(err){console.log(err)})
    .pipe(fs.createWriteStream(hbs))
    
        console.log(s)
}

module.exports=tohbs