import { Router } from 'express'
import { getAllUsers, getUserByID, createUser } from '../controllers/usersController.js'
export const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserByID)
userRouter.post('/', createUser)
