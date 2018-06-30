import express from 'express'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import mongoose from 'mongoose'
import schema from './schema'

const app = express()
const PORT = process.env.PORT || 3001

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/todolistdb')

app
  .set('port', PORT)
  .use(cors())
  .use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
  }))
  .get('/', (req, res, next) => {
    return res.json({
      msg: 'Hello user'
    })
  })

export default app
