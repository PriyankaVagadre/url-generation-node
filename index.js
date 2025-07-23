const express = require('express');

const app = express();

const PORT =8001;
const {connectToDB} = require('./connect');

connectToDB('mongodb://127.0.0.1:27017/shorturl').then(()=> console.log('db connected'))


const urlRouter = require('./routers/url');

app.use(express.json())

app.use('/', urlRouter)



app.listen(PORT, ()=> console.log('Server started ' +`${PORT}`))