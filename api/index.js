const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')

app.get('/greeting', cors(), (req, res) => {
  res.send({ message: 'Hello' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
