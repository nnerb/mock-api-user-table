import express from "express"
import cors from "cors"


const app = express()

app.use(cors())

const PORT = process.env.PORT || 3000


// Basic Route
app.get("/", (req, res) => {
  res.status(201).send({ msg: "Hello "})
})

const mockUsers = [
  { id: 1, username: 'brennyanee', displayName: 'Brenn' },
  { id: 2, username: 'trishayanee', displayName: 'Trisha' },
  { id: 3, username: 'yamyanee', displayName: 'Yam' },
  { id: 4, username: 'johnsmith', displayName: 'John' },
  { id: 5, username: 'janedoe', displayName: 'Jane' },
  { id: 6, username: 'alexrider', displayName: 'Alex' },
  { id: 7, username: 'mariaperez', displayName: 'Maria' },
  { id: 8, username: 'davidbrown', displayName: 'David' },
  { id: 9, username: 'chrislee', displayName: 'Chris' },
  { id: 10, username: 'emilyclark', displayName: 'Emily' }
]


// Query Parameters - Users Endpoint
app.get("/api/users" , (req, res) => {
  console.log("Request Query", req.query)
  const { query: { filter, value } } = req

  if (filter && value) return res.send(
    mockUsers.filter((user) => user[filter].includes(value))
  )
  return res.send(mockUsers)
})

// Route Parameters - User by ID

app.get("/api/users/:id", (req, res) => {
  console.log("Request Params", req.params)
  const parsedId = parseInt(req.params.id)
  console.log(parsedId)
  if (isNaN(parsedId)) {
    return res.status(400).send({ msg: 'Bad request. Invalid ID' })
  }
  const findUser = mockUsers.find((mockUser) => mockUser.id === parsedId)
  if (!findUser) return res.sendStatus(404)
  return res.send(findUser)
})


app.get("/api/products", (req, res) => {
  res.send([
    { id: 123, productName: 'Fries', price: '59'},
    { id: 124, productName: 'Fried Chicken', price: '99'},
    { id: 125, productName: 'Pasta', price: '87'}
  ])
})

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})