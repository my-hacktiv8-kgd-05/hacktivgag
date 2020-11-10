const express = require('express')
const app = express()
const port = 3000

const AppRouter = require('./routes')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use('/', AppRouter)

app.listen(port, () => {
    console.log(`HacktivGAG is live at http://127.0.0.1:${port}`)
})