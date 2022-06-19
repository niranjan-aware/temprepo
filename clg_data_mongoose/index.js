const express= require('express')
require('./mongoose')
const dataRouter=require('./addUserDataRouter')


const app=express()
const port= process.env.PORT||3000

app.use(express.json())
app.use(dataRouter)


 app.listen(port,()=>{
    console.log('Server is up on port'+port)
})