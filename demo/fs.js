const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err)=>{
//     if(err){
//         throw err
//     }
//     console.log('Папка создана');
// });

const filePath = path.join(__dirname, 'test', 'test.txt');
fs.writeFile(filePath, 'test for test.txt', (err)=>{
    if(err){
        throw err
    }
    console.log('text записан');
    
})

fs.appendFile(filePath, `\ntest again for test.txt`, (err)=>{
    if(err){
        throw err
    }
    console.log('text дописан');
    
})

fs.readFile(filePath, 'utf-8',(err, content)=> {
    if(err) {
        throw err
    }
    console.log('content', content);
    
    // without param 'utf-8'
    // const data = Buffer.from(content);
    // console.log('content from buffer', data.toString());
    
})