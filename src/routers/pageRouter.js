// part.02.B.1 - import router , fs-extra

const Router = require('express').Router;
const fs = require('fs-extra')

// part.02.B.2 - initialize router instance
const pageRouter = Router()

// part.02.B.3 - set up router to respond to GET requests
//              (to '/' route -- (localhost:3000/ )
pageRouter
  .get('/', (req, res)=>{

    // part.02.B.4 - send
    fs.readFile(`${__dirname}/../views/home.html`, 'utf-8')
      .then((htmlData)=>{
        res.send(htmlData)
      })
  })


pageRouter
  .get('/about', (req, res)=>{
    res.send('<h1> About Page!!</h1>')
  })

// part.02.B.5 - export router
module.exports = pageRouter
