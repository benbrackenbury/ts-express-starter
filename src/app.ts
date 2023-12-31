import express, { Request, Response } from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (_req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
