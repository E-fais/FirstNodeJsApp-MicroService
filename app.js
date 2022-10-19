const express = require('express')
const axios = require('axios')
const app = express()

app.get('/', (req, res) => {
    res.send('HELLO WORLD')
})
app.get('/todo',(req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response=>{
    res.json(response.data)
    }).catch(err=>{console.error(err)})
    
})
app.listen(3000, console.log('server running on port 3000')) 