const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/",(req,res)=>{
    db.Review.findAll().then(data=>{
        res.json(data);
    })
})

router.post("/",(req,res)=>{
    db.Review.create({
        title:req.body.title,
        author:req.body.author,
        body:req.body.body,
        ProductId:req.body.ProductId
    }).then(data=>{
        res.json(data)
    })
})

module.exports = router;