import express from 'express';
import dotenv from 'dotenv'
import auth from './routes/auth.js'
// import notes from './routes/notes.js'
import connectMongoDb from './connection.js'
import cors from "cors";
const app = express()
const PORT = 8000;
dotenv.config()


connectMongoDb(process.env.MONGODB_URI)
.then(()=> console.log("Connected Database Successfully"))
.catch((error) => console.log(error))

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Routes

// app.use("/api/notes", notes)
app.use("/api/auth",auth)

app.get('/', (req,res)=> {
        res.send("Hello world!")
})

app.listen(PORT, (err)=> {
        if(err) console.log(err)
        else console.log(`Server listening to PORT ${PORT}`)
})