const http=require('http')
const fs=require('fs')

const port =process.env.PORT || 4000

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.statusCode=200
        res.setHeader('Content-Type','text/html')  
        res.end('<h1>Hello, Wassup!</h1>')
    }else if(req.url=='/page'){
        res.statusCode=200
        res.setHeader('Content-Type','text/html')  
        res.end('<h1>Page!</h1>')
    }else if(req.url=='/hello'){
      const data=fs.readFileSync('index.html')
      res.end(data.toString())
    }
        else{
        res.statusCode=404
        res.end('<h1>Page not found</h1>')
    }

})

server.listen(port,()=>{
    console.log(`Server listening to ${port}`)
})