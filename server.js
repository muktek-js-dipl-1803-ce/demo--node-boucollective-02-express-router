const express = require('express')

// part-02--1: Import pageRouter + apiRouter
const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')

const app = express()
const PORT = 3000


// part-02--2: Pass the routers to .use() as route-prefix
app.use('/api', apiRouter)
app.use('/', pageRouter)


app.use((req, res)=>{
  res.send('<h3> 404 - big error - page no exist</h3>')
})

app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
