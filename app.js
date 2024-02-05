const express = require('express')
const mongoose = require('mongoose');
const app = express()
app.use(express.json())

 

mongoose.connect('mongodb+srv://admin:adminpassword@cluster0.dfzmige.mongodb.net/ecom-db?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB!'));

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
});

const ProductModel = mongoose.model('Product', ProductSchema);


app.post('/products', function (request, response) {


try {
    const newProduct = new ProductModel();
    newProduct.name = request.body.name;
    newProduct.price = request.body.price;
    newProduct.save();
    response.send('Product created')
}catch(error) {
    console.error("Error on insert to DB!: ", error)
    console.send("Error creating procuct!: ")
}
  })

app.get('/', function (request, response) {
  response.send('Hello World')
})

  

app.listen(3000)