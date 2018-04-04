const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3003;

app.get('/api/test', (req, res)=>{
    res.send({express : "자 이제 시작해볼까??"});
});

app.listen(PORT, ()=>{
    console.log(`You are connected to ${PORT}`)
})