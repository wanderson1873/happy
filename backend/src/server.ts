import express from 'express'
import './database/connection'

const app = express()
app.use(express.json())

app.get('/user', (request, response) => {
   return response.json({message: "Hello NLW"})
})

app.listen(3333)