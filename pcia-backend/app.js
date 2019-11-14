const express = require ('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const expressValidator = require('express-validator')

const allRoutes = require('./routes')


const app = express()


mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useCreateIndex: true
})
.then(
  () =>console.log("DB Connected")
)

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// app.use(expressValidator());


app.use("/data", allRoutes)

const port = process.env.PORT

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})
