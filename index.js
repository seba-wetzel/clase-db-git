import express from 'express'
import { sequelize } from './db/index.js'
import User from './models/User.js'
import Post from './models/Post.js'
import { routes } from './routes/index.js'
import { isAutehnticated } from './middleware/Auth.js'
const app = express()
const port = process.env.PORT || 9000

Post.belongsTo(User)
User.hasMany(Post)

app.use(express.json())

app.use('/users', isAutehnticated, routes.userRouter)
app.use('/posts', routes.postRouter)

app.listen(port, async () => {
  await sequelize.sync({ force: true })
  await User.create({
    username: 'pepito',
    password: '1234'
  })
  await Post.create({
    title: 'post 1',
    text: 'text 1',
    UserId: 1

  })
  console.log(`Example app listening on port ${port}`)
})
