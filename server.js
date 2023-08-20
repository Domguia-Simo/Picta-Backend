const express = require('express')
const mongoose = require('mongoose')

var app = express()
const config = require('./configurations')
app = config(app)

//db connection
const mongoUrl = 'mongodb://127.0.0.1:27017/picta'
mongoose.connect(mongoUrl)
const db = mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log("Connected to DB"))
//

var port = process.env.port || 5000

//Importing external routes
const userRoutes = require('./Routes/userRoutes')
const postRoutes = require('./Routes/postRoutes')
const commentRoutes = require('./Routes/commentRoutes')
// const allComments = require('./Routes/actionRoutes')
const actionRoutes = require('./Routes/actionRoutes')

//Different Routes
app.use('/picta/api/user' ,userRoutes)
app.use('/picta/api/post' ,postRoutes)
app.use('/picta/api/comment',commentRoutes)
app.use('/picta/api/action',actionRoutes)

app.use((req ,res)=>{
    res.setHeader('Content-Type', 'application/json');
})

//Main route
app.get('/' ,(req ,res)=>{
    res.sendFile('index.html')
})

//ANy other route which is not specified
app.get('*' ,(req ,res)=>{
    res.send("Nothing Found Here !!!")
})

app.listen(port ,()=>[
    console.log(`Server running on http://127.0.0.1:${port}`)
])