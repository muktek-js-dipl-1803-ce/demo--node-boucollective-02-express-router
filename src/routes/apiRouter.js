const Router = require('express').Router

const apiRouter  = Router()


apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/vendors' : 'Show users',
    '/api/products' : 'Show messages'
  })
})

apiRouter.get('/vendors', (req, res)=>{
  res.json([
    {id: 1, name: 'Lionheart Beach',  year_established: 2008},
    {id: 2, name: 'SCHUNNE', year_established: 2013},
    {id: 3, name: 'CRNDesign', year_established: 2011}
  ])
})

apiRouter.get('/products', (req, res)=>{
  res.json([
    { id: 1, body: 'Work Planner Stickers', price: 75, vendor_id: 3},
    { id: 2, body: 'Christmas Rabbit Toy', price: 43, vendor_id: 3},
    { id: 3, body: 'Crossbody Brown Leather Bag', price: 21, vendor_id: 1},
    { id: 4, body: 'Isabel Linen Kimodo Dress', price: 21, vendor_id: 2}
  ])
})

module.exports = apiRouter
