const http = require('http')
const port = 3000
const ip = 'localhost'

const server = http.createServer((req, res) =>{
    if(req.url == '/'){
            res.end('<script></script>')
    }
   
})

server.listen(port, ip, () => {
    console.log(`Servidor rondando em http://${ip}:${port}`)
})

