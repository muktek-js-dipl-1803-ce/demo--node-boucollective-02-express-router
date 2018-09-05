// part.02.B.1 - import router 
const Router = require('express').Router

// part.02.B.2 - initialize router instance
const apiRouter  = Router()

apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/vendors' : 'Show users',
    '/api/products' : 'Show messages'
  })
})

// part.02.B.3 - set up router to respond to GET requests
//              (to api/vendors) ... do this for all 3 routes
apiRouter.get('/vendors', (req, res)=>{
  
  // part.02.B.4 - send json `res.json(...)`
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


// part.02.B.5 - export router
module.exports = apiRouter
