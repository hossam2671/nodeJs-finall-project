require('./config/connect');
const express = require('express')
const app = express()
const port = 4000
const cors=require('cors');


  const userRoute=require('./route/route');

app.use(cors())
app.use(express.urlencoded({extended:true})); // 
app.use(express.json()); 
app.use('/user',userRoute);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))