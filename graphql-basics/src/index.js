import {
    GraphQLServer
} from 'graphql-yoga'
import {
    Agent
} from 'http';

//type definition/Schema
const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float
    }
`

//resolvers
const resolvers = {
    Query: {
        id() {
            return 'abc124'
        },
        name() {
            return 'Abraham'
        },
        age() {
            return 25
        },
        employed() {
            return true
        },
        gpa() {
            return null
        }

    }
}

const server = new GraphQLServer({
    typeDefs, // or typeDefs: typeDefs value
    resolvers // or resolvers: resolvers value
})

server.start(() => {
    console.log("server on run");

})