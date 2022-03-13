const express = require('express')
const {
  graphqlHTTP
} = require('express-graphql')
const {
  makeExecutableSchema
} = require('graphql-tools')
const schemas = require('./graphql/schemas')
const resolvers = require('./graphql/resolvers')

const app = express()
const port = 4000

const schema = makeExecutableSchema({
  typeDefs: schemas,
  resolvers: resolvers
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Rodando em => http://localhost:${port}/graphql`)
})