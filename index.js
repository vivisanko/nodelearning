const http = require('http');
const path = require('path');
const fs = require('fs');
const {text} = require('./data');

console.log(text);

console.log('__dirname', __dirname);
console.log('__filename', __filename);
console.log('module', module);

const server=http.createServer((req, res)=>{
console.log('req.url', req.url);
let filePath = path.join(__dirname,'public',req.url==='/'? 'index.html': req.url)
console.log('filePath', filePath);
const ext= path.extname(filePath);
let contentType = 'text/html'

switch(ext){
    case '.css':
        contentType = 'text/css'
        break
    
    case '.js': 
        contentType = 'text/javascript'
        break

    default:
        contentType = 'text/html'
}

if(!ext){
    filePath+='.html';
}
        fs.readFile(filePath, (err, content)=>{
            if(err){
                fs.readFile(path.join(__dirname,'public','pageNotFound.html'), (err, data)=>{
                    if(err){
                        res.writeHead(500)
                        res.end('Server Error')
                    } else {
                    res.writeHead(404, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                   }
                })
            } else {
                res.writeHead(200, {
                    'Content-Type': contentType
                })
                res.end(content)
            }
        })
})

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
    console.log('server has been started on port', PORT);
})
