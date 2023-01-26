const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello my name is danupon ')
})

app.get('/users', (req, res) => {
  res.send('show all users ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})