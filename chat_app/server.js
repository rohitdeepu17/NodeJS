var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var http = require('http').Server(app)
var io = require('socket.io')(http)



app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var messages = [
    {name:'Rohit Singla', message: 'Hi'},
    {name:'Rohit Singla', message: 'Hello'}
]

app.get('/messages', (req, res)=>{
    res.send(messages)
})

app.post('/messages', (req, res)=>{
    console.log(req.body)
    messages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200)
})

io.on('connection', (socket)=>{
    console.log('a user connected')
})

var server = http.listen(3000, ()=>{
    console.log('server is listening on port', server.address().port)
})

