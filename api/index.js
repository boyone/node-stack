const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/greeting', (req, res) => {
  res.send({ message: 'Hello' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
