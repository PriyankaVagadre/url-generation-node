const express = require('express');
const urlRouter = require('./routers/url');
const path = require('path')

const app = express();
const PORT =8001;

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'));

const {connectToDB} = require('./connect');
connectToDB('mongodb://127.0.0.1:27017/shorturl').then(()=> console.log('db connected'))

app.use(express.json())

app.use('/', urlRouter)

app.get('/url/server',(req, res)=>{
res.render('home')
})



app.listen(PORT, ()=> console.log('Server started ' +`${PORT}`))