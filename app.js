require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const xss = require('xss-clean');
const connectDB = require('./db/connectDB.js')
const router = require('./routes/galeryRouter.js')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})
const app = express()
app.use(express.json())
app.use(fileUpload({useTempFiles:true}))
app.use(cors())
app.use(xss())


app.get('/', (req, res) => {
    res.send('<h1>Galery API</h1>');
  });

app.use('/api/v1/',router)



const port = 5000

const start=()=>{
    try {
        connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{console.log("server calıştı")})
    } catch (error) {
        console.log(error);
    }
}

start()
