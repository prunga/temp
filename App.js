const http=require('http')
const server=http.createServer((req,res)=>{
   if (req.url==='l'){
    res.end('hello world')
   }
if (req.ulr==='/about'){
    res.end('goodbye world')
}
res.end('<p>Oooops!<p>')
})

server.listen(4000)
