require('./db/mongoose')
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const Product = require('./model/product');

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.post('/admin/product', (req,res) => {
    console.log(req.body);
    const manyProducts = req.body; 
    manyProducts.forEach(e => {
        const product = new Product(e);
        
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

app.get('/json/products', (req, res) => {
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

app.get('/json/product/:id', (req, res) => {
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

// app.patch('/admin/patch/:id', (req, res) => {
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

// app.delete('/admin/delete/:id', (req, res) => {
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


app.listen(port, () => {
    console.log('Escuchando puerto 3000.');
});