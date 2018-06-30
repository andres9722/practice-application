import Task from './models/task'

export const resolvers = {
  Query: {
    async allTasks () {
      const tasks = await Task.find()
      return tasks
    },
    async getTask (root, {_id}) {
      const task = await Task.findById(_id)
      return task
    }
  },
  Mutation: {
    async createTask (root, {input}) {
      const task = await Task.create(input)
      return task
    },
    async updateTask (root, {_id, input}) {
      const task = await Task.findOneAndUpdate({_id}, input, {new: true})
      return task
    },
    async deleteTask (root, {_id}) {
      const task = Task.findByIdAndRemove(_id)
      return task
    }
  }
}
