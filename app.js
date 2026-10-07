import express from 'express'

const app = express() // create express app

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/users', (req, res) => {
   res.json({
      name: 'Amin',
      age: 25,
      email: 'amin@gmail.com',
   })
})

app.get('/health', (req, res) => {
   res.json({
      status: 'OK',
      message: 'Server is running smoothly',
   })
})

app.listen(3000, () => {
   console.log('Server is running on port 3000')
})
