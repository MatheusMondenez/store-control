'use strict'

const User = use('App/Models/User')

class UserController {
  /**
   * Returns all users.
   *
   * @returns {JSON} users
   *
   */
  async index({ response }) {
    const users = await User.all()

    return response.status(200).json(users)
  }

  /**
   * Inserts a new user.
   *
   * @returns {JSON} user
   */
  async store({ request, response }) {
    const data = request.all()
    const user = await User.create(data)

    return response.status(201).json(user)
  }

  /**
   * Returns a user by a given id.
   *
   * @returns {JSON} user
   */
  async show({ response, params }) {
    const { id } = params
    const user = await User.findById(id)

    return response.status(200).json(user)
  }

  /**
   * Updates a user by a given id.
   *
   * @returns {JSON} user
   */
  async update({ request, response, params }) {

  }

  /**
   * Deletes a user by a given id.
   *
   * @returns {void}
   */
  async destroy({ request, response, params }) {

  }
}

module.exports = UserController
