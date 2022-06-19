const express= require('express')
// require('./db/mongoose')
require('../clg_data_mongoose/mongoose')
const dataRouter=require('./routes/userSignIn')
// const loginValidationRouter=require('./routes/userLoginRoute')
const loginValidationRouter=require('./routes/checkUserLogin')
const userDetailRoute=require('./routes/userLoginRoute')
const userAvailableDcos=require('./routes/getavailableDocs')

const app=express()
const port= process.env.PORT||3000

app.use(express.json())

app.use(dataRouter)

app.use(loginValidationRouter)

app.use(userDetailRoute)

app.use(userAvailableDcos)

 app.listen(port,()=>{
    console.log('Server is up on port'+port)
})