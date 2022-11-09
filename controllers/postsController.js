import Post from '../models/Post.js'
import User from '../models/User.js'

export const getAllPosts = async (req, res) => {
  try {
    const post = await Post.findAll({ include: { model: User } })
    res.send(post)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const getPostByID = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, { include: { model: User } })
    res.send(post)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const createPost = async (req, res) => {
  try {
    const { title, text, user } = req.body
    const newPost = await Post.create({
      title,
      text,
      UserId: user,
      foreignKey: user
    })
    res.send(newPost)
  } catch (err) {
    res.status(500).send(err)
  }
}
