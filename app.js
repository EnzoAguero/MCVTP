const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
const mainRouter = require('./routers/main')
const aboutRouter = require('./routers/about')

app.use('/',mainRouter)
app.use('/about', aboutRouter)

app.listen (port, () => console.log('Server open as ' + port))
