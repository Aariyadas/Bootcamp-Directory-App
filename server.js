const express=require('express');
const dotenv=require('dotenv');
// const logger=require("./middlewares/logger")
const morgan=require('morgan')

const bootcamps=require('./routes/bootcamps')


dotenv.config({path:"./config/config.env"});
const app=express();



if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
}



app.use('/api/v1/bootcamps',bootcamps)







const PORT =process.env.PORT || 8000
app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV } mode on port ${PORT}`))