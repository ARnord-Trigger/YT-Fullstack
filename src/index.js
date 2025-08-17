// require('dotenv').config({path : './.env'})


// import mongoose from 'mongoose'
// import {DB_NAME} from "./constants.js"


// import dotenv from 'dotenv';
// dotenv.config({ path: './env' });
import express from 'express';
import connectDB from './db/index.js';

const app = express() ;

connectDB() ;



// way - 1 :  
/*
 ; ( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("err" , (err)=>{
            console.log(" ERR : " , err ) ;
            throw err ;
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is listenin on port ${process.env.PORT || 8000}`);
        })

    }catch (error){
        console.error('ERROR: ', error)
        throw error
    }
 } )()
*/
