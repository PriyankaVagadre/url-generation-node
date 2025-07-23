const express = require('express');

const app = express();

const PORT =8001;

const urlRouter = require('./routers/url')

app.use('/url', urlRouter)

app.listen(PORT, ()=> console.log('Server started ' +`${PORT}`))