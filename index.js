const express = require('express');
const urlRouter = require('./routers/url');
const path = require('path')

const userRoute = require('./routers/user')

const app = express();
const PORT =8001;

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'));

const {connectToDB} = require('./connect');
connectToDB('mongodb://127.0.0.1:27017/shorturl').then(()=> console.log('db connected'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/', urlRouter)

app.use('/user', userRoute)

app.get('/url/server',(req, res)=>{
res.render('home')
})

app.get('/user/signup', (req,res)=>{
    res.render('signup')
})


app.listen(PORT, ()=> console.log('Server started ' +`${PORT}`))