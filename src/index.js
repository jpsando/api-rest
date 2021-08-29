const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const productRouter = require('./routers/products');

app.use(productRouter);

app.listen(port, () => {
    console.log('Escuchando puerto 3000.');
});