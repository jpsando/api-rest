const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;
const productRouter = require('./routers/product');

app.use(productRouter);


app.use(cors());

app.use(express.json());

app.listen(port, () => {
    console.log('Escuchando puerto 3000.');
});