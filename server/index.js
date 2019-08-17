const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/api/test', (req, res) => {
  res.send('Hi')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, err => {
  console.log('Listening on', PORT)
})
