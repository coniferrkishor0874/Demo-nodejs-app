// const express = require('express')
// const employeeRoute = require('./src/routes/employeeRoutes')
 
// const app = express();
 
// //Makes sure the returned object is in json format
// app.use(express.json())
 
// //base route
// app.use('/api/v1/employees', employeeRoute);
 
// //Sets the port number and startup message when the server starts
// const port = 8080;
// app.listen(port, () => console.log(`Listening to port ${port}`))
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})



