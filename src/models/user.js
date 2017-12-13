// @flow
import type { DataTypes } from 'sequelize'

export default (sequelize: *, types: DataTypes) => {
  const User = sequelize.define('user', {
    username: { type: types.STRING, unique: true },
    email: { type: types.STRING, unique: true },
    password: types.STRING,
  })

  User.associate = models => {}

  return User
}