const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const fileRoutes=require('./Routes/file')

dotenv.config();

const app = express()

const port = 3000

app.use(cors())//frontend ko backend se connect, browser block nahi karega

app.use(express.json())//JSON data ko read karne ke liye body parser middleware

//jab koi file upload karega to Uploads folder me save hogi  like http://localhost:5000/uploads/myfile.pdf
app.use('/Uploads',express.static('uploads'));


app.use('/api/files',fileRoutes)//jo upload,download hoga 

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(3000,()=>console.log('server on http://localhost:3000'))
}).catch((err)=>console.log(err));

app.get('/', (req, res) => {
  res.send('Hello Shivam!')
})

