var fs = require('fs')

var data = require('./data.json')

console.log(data)
console.log(data.name)

fs.readFile('./data.json', 'utf-8', (err, data) => {
    console.log(data)
    console.log(data.name)

    var data = JSON.parse(data)
    console.log(data.name)
})

fs.readdir('c:/', (err, data)=>{
    console.log(data)
})

var dataJson = {
    name: 'Bob'
}

fs.writeFile('data.json',JSON.stringify(dataJson), (err)=>{
    console.log('write finished', err)
})