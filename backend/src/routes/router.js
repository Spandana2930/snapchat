const express = require('express');
const user = require('../schema/userschema');
const router = new express.Router();


router.get('/userGetData',(req,res)=>{
    const storeddata = user.find({})
    console.log(storeddata)
    res.status(200).send('')
})
router.post('/userPostData',(req,res)=>{
    const body = req.body;
    console.log(body)
    user.insertMany(req.body).then((data)=> res.status(200).send(data))
})
router.post('/validateDetails',(req,res)=>{
    const body = req.body
    user.find(body).then((data)=>res.status(200).send(data))
})
module.exports = router;