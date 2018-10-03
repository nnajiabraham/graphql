import {
    GraphQLServer
} from 'graphql-yoga'

//type definition/Schema
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`

//resolvers
const resolvers = {
    Query: {
        hello() {
            return 'this is my first query!'
        },
        name() {
            return 'this is my name'
        },
        location() {
            return 'i reside in winnipeg'
        },
        bio() {
            return 'learning GQL '
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