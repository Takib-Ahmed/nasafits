const express = require('express')
const app = express()
const cors =require('cors')

const corsOptions = {
    origin:['http://localhost:5173']
}

app.use(cors(corsOptions))
app.get('/api',(req,res)=>{
res.json({"numbers":["One","Two","three"]})
})

app.listen(3000,()=>{
    console.log('Server is running on  3000')
})