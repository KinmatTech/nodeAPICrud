const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.routes.js');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Listening to port server
app.listen(3000, () => {
console.log('Server is running on port 3000');
});

// Getting the API
app.get('/', (req, res) =>  { 
res.send('Hello from Kinmatech Crud API Server 3000 confirm');
});

// routes
app.use("/api/products", productRoute);
app.use("/api/product", productRoute);

mongoose.connect('mongodb+srv://mathewok20:ESvipTRl8VDkl2X8@backenddb.i72ozel.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb')
  .then(() => { 
    console.log('Connected to the database!');
});