import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { gql } from 'graphql-tag'
import { NextRequest } from 'next/server'

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}


const resolvers = {
    Query: {
        getUsers: async () => {
            const dummyUrl = 'https://dummyjson.com/users'
            const response = await fetch(dummyUrl)
            const data = await response.json();
            const users: Array<User> = data.users.map((user: User) => ({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }));
            return users
        }
    }
}
const typeDefs = gql`
    type User {
        id:ID,
        firstName:String,
        lastName:String,
        email:String,

    }
    type Query {
        getUsers : [User]
    }`

const server = new ApolloServer({
    resolvers,
    typeDefs
})

const handler = startServerAndCreateNextHandler<NextRequest>(server)

export { handler as GET, handler as POST }

