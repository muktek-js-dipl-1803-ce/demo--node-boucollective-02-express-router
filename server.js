const express = require('express')

//part.02.B.1 - import routers
const pageRouter = require('./src/routers/pageRouter.js')
const apiRouter = require('./src/routers/apiRouter.js')

const app = express()
const PORT = 3000


//part.02.B.2 - configure routers with express under '/' and '/api' prefixes
app.use('/api', apiRouter)
app.use('/', pageRouter)


app.use((req, res)=>{
  res.send('<h3> 404 - big error - page no exist</h3>')
})

app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
