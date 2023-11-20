import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { gql } from 'graphql-tag'
import { NextRequest } from 'next/server'

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    username: string;
}


const resolvers = {
    Query: {
        getUsers: async (_: any, { currentPage }: { currentPage: number }) => {
            let skip = (currentPage - 1) * 10;
            const dummyUrl = `https://dummyjson.com/users?limit=10&skip=${skip}`
            const response = await fetch(dummyUrl)
            const data = await response.json();
            const users: Array<User> = data.users.map((user: User) => ({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                age: user.age,
                username: user.username
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
        age:Int,
        username:String
    }
    type Query {
        getUsers(currentPage:Int) : [User]
    }`

const server = new ApolloServer({
    resolvers,
    typeDefs
})

const handler = startServerAndCreateNextHandler<NextRequest>(server)

export { handler as GET, handler as POST }

