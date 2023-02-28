const fs=require('fs')

fs.readFile('hello.txt','utf8',(err,data)=>{
    console.log(data)
})

const a=fs.readFileSync('hello.txt')
console.log(a.toString())

fs.writeFile('hello2.txt','file2',(data)=>{
    console.log(data)
})