const express = require('express');

const app = express();


app.use('/users', (req, res, next) => {
    console.log('In the users Middleware!');
    res.send('<h1>The users page!</h1>')
})

app.use('/', (req, res, next) => {
    console.log('In another Middleware!');
    res.send('<h1>Hello from my Express Home Page!</h1>')
})

app.listen(3000)