const express = require('express');
const app = express();
const mongoose = require('mongoose');
//config mongo
const config = require('config');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
  next();
});

//connect into mongo
// mongo config
const DB_URI = config.get('mongoURI');

// mongo connection
mongoose
    .connect(DB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB has connected ... '))
    .catch(err => console.log(err));
require('./models/user');
require('./models/post');

// middleware
app.use(express.json()); 

//blablabla
app.use('/',require('./routes/auth'));
app.use('/',require('./routes/post'));

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server has started ... `));


