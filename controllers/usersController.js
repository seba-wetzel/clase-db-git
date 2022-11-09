import User from '../models/User.js'
import Post from '../models/Post.js'
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const getUserByID = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: Post
    })
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const newUser = await User.create({
      username,
      password
    })
    res.send(newUser)
  } catch (err) {
    res.status(500).send(err)
  }
}
