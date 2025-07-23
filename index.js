const express = require('express');

const app = express();

const PORT =8001;

const urlRouter = require('./routers/url')

const {connectToDB} = require('./connect');

connectToDB('mongodb://localhost:27017/shortURL').then(()=> console.log('db connected'))

app.use('/url', urlRouter)

app.listen(PORT, ()=> console.log('Server started ' +`${PORT}`))