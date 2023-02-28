const http=require('http')

const port =process.env.PORT || 4000
const server=http.createServer((req,res)=>{
  res.statusCode=200
  res.setHeader('Content-Type','text/html')  
  res.end('<h1>Hello, Wassup!</h1>')
})

server.listen(port,()=>{
    console.log(`Server listening to ${port}`)
})