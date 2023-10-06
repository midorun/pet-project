import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import pkg from 'json-server'
const { create, router: _router, defaults, bodyParser } = pkg

const server = create()
const router = _router(resolve(__dirname, 'db.json'))

// Set default middlewares (logger, static, cors and no-cache)
server.use(defaults())

server.use(bodyParser)

const DB = () =>
  JSON.parse(readFileSync(resolve(__dirname, 'db.json'), 'UTF-8'))

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
    const id = req.query['id']

    const { password, ...user } = DB().users.find((user) => user.id === id)

    return res.status(200).json(user)
  } catch (e) {}
})

// server.put('/user/:id', (req, res) => {
//   try {
//     console.log(req.params)
//   } catch (e) {}
// })

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Unauthorized' })
  }

  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(8000, () => {
  console.log('JSON Server is running')
})
