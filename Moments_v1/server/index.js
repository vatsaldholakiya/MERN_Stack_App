import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use(cors());
app.use('/posts',postRoutes)
app.get('/',(req,res)=>{
    res.send('Hello from the API...')   
})

const connection_url = process.env.CONNECTION_URL
const port = process.env.PORT || 3306 

mongoose.connect(connection_url, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(port,()=>console.log(`Server running on port : ${port}`)))
    .catch(console.error());


