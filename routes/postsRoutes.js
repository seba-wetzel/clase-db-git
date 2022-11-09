import { Router } from 'express'
import { getAllPosts, getPostByID, createPost } from '../controllers/postsController.js'
export const postRouter = Router()

postRouter.get('/', getAllPosts)
postRouter.get('/:id', getPostByID)
postRouter.post('/', createPost)
