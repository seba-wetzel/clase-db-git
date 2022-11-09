import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/index.js'

class Post extends Model {}

Post.init({
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'Post' // We need to choose the model name
})

export default Post
