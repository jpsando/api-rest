const mongoose = require('mongoose');
const uri = "mongodb+srv://"+process.env.USERDB+":"+process.env.PASSDB+"@cluster0.uxwqr.mongodb.net/tiendajota?retryWrites=true&w=majority";

//mongoose.connect('mongodb://127.0.0.1:27017/tiendajota',{
mongoose.connect(uri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
