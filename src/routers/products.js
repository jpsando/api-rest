const express = require('express');
require('./db/mongoose')
const mongoose = require('mongoose');
const router = new express.Router();
const Product = require('../model/product');


router.post('/admin/product', (req,res) => {
    console.log(req.body);
    const manyProducts = req.body; 
    let product;
    manyProducts.forEach(e => {
        product = new Product(e);
        
        //.save() devuelve una promise
        product.save()
            .then(() => { 
                res
                .status(201)
                .send (product) 
            })
            .catch( (err) => { 
                res
                .status(400)
                .send(err) 
            });  
    });

});

router.get('/json/products', (req, res) => {
    Product.find()
        .then((result) => {
            res.send(result);
            console.log(result);
        })
        .catch(err => {
            res.send(err);
            console.log(err)
        })
});

router.get('/json/product/:id', (req, res) => {
   const _id = req.params.id;
   Product.findById(_id)

    .then((product) => {
        if(!product){
            return res.status(404).send("Product not found")
        }
        res.status(200).send(product)
    })
    .catch(err => {
        const validId = mongoose.Types.ObjectId.isValid(_id);
        if(!validId) {
          return res.status(501).send(err)
        }
         res.status(500).send(err)
      })
});

// router.patch('/admin/patch/:id', (req, res) => {
//     const _id = req.params.id;
//     Product.findByIdAndUpdate(_id, req.body, {
//         new: true,
//         runValidators: true
//     }).then((product) => {
//         if(!product) {
//             return res.status(404).send();
//         }
//         res.send(product);
//     }).catch(err => {
//         res.status(404).send(err);
//     });
// });

// router.delete('/admin/delete/:id', (req, res) => {
//     const _id = req.params.id;
//     Product.deleteOne({ _id: _id })
//         .then((result) => {
//             res.send(result);
//             console.log(result);
//         })
//         .catch(err => {
//             res.send(err);
//             console.log(err)
//         })
// });

module.exports = router;