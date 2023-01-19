const express = require('express')

const { sequelize, Author, Book } = require('./models')

const app = express()
app.use(express.json())

app.post('/authors', async(req,res) => {
  const {name} = req.body

  try{
      const author = await Author.create({ name })
      return res.json(author)
  } catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
})

app.post('/books', async(req,res) => {
  const {name, tag, published, bookId} = req.body

  try{
      const book = await Book.create({ name, tag, published, bookId })
      return res.json(book)
  } catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
})

app.get('/authors', async (req, res) => {
  try {
    const users = await Author.find()

    return res.json(authors)
  } catch(err){
    console.log(err)
  return res.status(500).json({ error: 'Something went wrong'})
  }
})

app.listen({ port: 5001 }, async () => {
  console.log('Server up on http://localhost:5001')
  await sequelize.authenticate()
  console.log('Database connected!')
})