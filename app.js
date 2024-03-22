//ไว้ใช้ run application หลักที่เราสร้าง
//ประกาศใช้งาน express
const express = require('express');
const debug = require('debug')('app');
const app = express();
const morgan = reqire('morgan');
const port = 3000;

app.use(morgan('combined'));
//เอาไว้จัดการกับ request
app.get("/",(req,res) =>{

    res.send('Hello NODEJSsss');

})

app.listen(port, ()=>{

    debug("Listening on port",port);

})