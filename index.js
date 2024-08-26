const express = require('express')

require('dotenv').config()

const app = express()
const PORT = 3000

app.listen(process.env.PORT,()=>{
  console.log(`server is running on ${PORT}`)
})

app.get('/',(req,res) =>{
  res.send("welcome to my home page")
})

