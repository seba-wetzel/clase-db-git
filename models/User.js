import { DataTypes } from 'sequelize'
import { sequelize } from '../db/index.js'
import bcrypt from 'bcrypt'

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING
  // birthday: DataTypes.DATE
})
const hashPassword = async (password) => await bcrypt.hash(password, 10)

User.beforeCreate(async (user, options) => {
  const hashedPassword = await hashPassword(user.password)
  user.password = hashedPassword
})

export default User
