// importando modulo do express
const express = require('express')

const app = express ()
 
app.get("/hello",(req ,res) =>{
    res.send("nome bom ai !!!")

})

app.listen(3000, ()  => {

   console.log("api iniciado! rondando em https://localhost:3000") 
})