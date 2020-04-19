const express = require("express");
const router = express.Router();
const db = require("../models")


router.route("/")
.get((req,res)=>{
    db.Product.findAll().then(dbProducts=>{
        res.json(dbProducts);
    })
}).post((req,res)=>{
    db.Product.create({
        product_name:req.body.product_name,
        price:req.body.price
    }).then(newDbProduct=>{
        res.status(200).json(newDbProduct);
    })
})


router.route("/:id").get((req,res)=>{
    db.Product.findOne({
        where:{
            id:req.params.id
        },
        include:[db.Review]
    }).then(dbProduct=>{
        res.json(dbProduct)
    })
}).put((req,res)=>{
    db.Product.update({
        product_name:req.body.product_name,
        price:req.body.price
    },{
        where:{
            id:req.params.id
        }
    }).then(updatedDbProduct=>{
        res.status(200).json(updatedDbProduct);
    })
}).delete((req,res)=>{
    db.Product.destroy({
        where:{
            id:req.params.id
        }
    }).then(deletedProduct=>{
        res.status(200).json(deletedProduct);
    })
})

module.exports = router;
