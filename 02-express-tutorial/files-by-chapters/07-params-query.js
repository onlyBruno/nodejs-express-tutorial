const express = require('express')
const app = express()

const {products} = require('./data.js')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
    const newProducts  = products.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image}
    })

    res.json(newProducts)
})
// getting a specific product
app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )
    if(!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    console.log(singleProduct)
    res.json(singleProduct)
})
// A more complex router with more than one params
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    res.send('Hello world!')
})

app.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  const {search, limit} = req.query
  let sortedProducts = [...products]

  if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
      })
  }
  if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search')
      // uses of return is to finish the request otherwise js would keep running the code and shows a error from line 56
      return res.status(200).json({success: true, data: []
    })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})