const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/",(req,res)=>{
    db.Product.findAll({
        raw:true
    }).then(dbProducts=>{
        const hbsObj = {
            products:dbProducts
        }
        console.log(hbsObj);
        res.render("products/index",hbsObj)
    })
})

router.get("/new",(req,res)=>{
    res.render("products/create");
})

router.get("/products/:id",(req,res)=>{
    db.Product.findOne({
        where: {
            id:req.params.id
        },
        include:[db.Review]
    }).then(dbProduct=>{
        console.log(dbProduct);
        // res.json(dbProduct)
        res.render('products/details',dbProduct.dataValues)
    })
})

router.get("/products/edit/:id",(req,res)=>{
    db.Product.findOne({
        raw:true,
        where:{
            id:req.params.id
        }
    }).then(dbProdcut=>{
        res.render("products/edit",dbProdcut)
    })
})

module.exports = router;