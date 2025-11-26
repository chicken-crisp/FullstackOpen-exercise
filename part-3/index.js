const express = require("express")
const app = express()
app.use(express.json())

let notes = [
    {
        id : "1",
        name : "HTML is easy",
        important : true
    },
    {
        id : "2",
        name : "Browser can execute only Javascript",
        important : false
    },
    {
        id : "3",
        name : "GET and POST are the most important methods of HTTP protocol",
        important : true
    },
]

app.get('/', (req,res) => {
    res.send('<h1>Hello World!</h1>')
})
app.get('/api/notes',(req,res) =>{
    res.json(notes)
})
app.get('/api/notes/:id', (req,res) => {
    const id = req.params.id
    const note = notes.find(note => note.id === id)
    if(note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/notes/:id', (req,res)=>{
    const id = req.params.id
    notes = notes.filter(note => note.id !== id)

    res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.post('/api/notes', (req,res)=>{
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => Number(n.id))) 
    : 0;

    const note = req.body
    note.id = String(maxId + 1)

    notes = notes.concat(note)

    console.log(note)
    res.json(note)
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})