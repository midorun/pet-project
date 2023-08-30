const fs = require('fs')
const path = require('path')

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults())

server.use(jsonServer.bodyParser)

const DB = () =>
  JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))

// Add custom routes before JSON Server router
server.post('/login', (req, res) => {
  try {
    const body = req.body
    const user = DB().users.find(
      ({ username, password }) =>
        username === body.username && password === body.password
    )

    if (user) {
      return res.json(user)
    }

    return res.status(403).json({ message: 'User not found' })
  } catch (e) {
    return res.status(500).json(e.message)
  }
})

server.get('/me', (req, res) => {
  try {
    if (req.headers.authorization) {
      const id = req.query['id']

      const user = DB().users.find((user) => user.id === id)

      return res.status(200).json(user)
    }

    return res.status(403).json({ message: 'Unauthorized' })
  } catch (e) {}
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(8000, () => {
  console.log('JSON Server is running')
})
