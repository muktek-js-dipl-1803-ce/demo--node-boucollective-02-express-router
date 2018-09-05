const express = require('express')

<<<<<<< HEAD
// part-02--1: Import pageRouter + apiRouter
=======
//part.02.B.1 - import routers
>>>>>>> 5ff46ed514f0a27d1a1acbd92895c2b8e4abb31e
const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')

const app = express()
const PORT = 3000


<<<<<<< HEAD
// part-02--2: Pass the routers to .use() as route-prefix
=======
//part.02.B.2 - configure routers with express under '/' and '/api' prefixes
>>>>>>> 5ff46ed514f0a27d1a1acbd92895c2b8e4abb31e
app.use('/api', apiRouter)
app.use('/', pageRouter)


app.use((req, res)=>{
  res.send('<h3> 404 - big error - page no exist</h3>')
})

app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
