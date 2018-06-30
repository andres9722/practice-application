import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Task {
    _id: ID
    text: String!
    isComplete: Boolean!
  }

  type Query {
    getTask(_id: ID) : Task
    allTasks : [Task]
  }

  input TaskInput {
    text: String!
    isComplete: Boolean!
  }

  type Mutation {
    createTask(input: TaskInput) : Task
    updateTask(_id: ID!, input: TaskInput) : Task
    deleteTask(_id: ID!) : Task
  }
`

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
