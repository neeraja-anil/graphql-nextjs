"use client"
const dynamic = 'force-dynamic'

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import UserTableComponent from "./UserTableComponent"
import TableUsingAntd from "./TableUsingAntd"

interface data {
    getUsers: any
}

const query = gql`query {
    getUsers {
      id,
      firstName,
      lastName,
      email
    }
  }`

export default function UserComponent() {
    const { data, error } = useSuspenseQuery<data>(query)
    if (error) return `Error! ${error.message}`
    const users = data.getUsers
    console.log(users)
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4 flex flex-col items-center">
            <h1 className="text-lg text-gray-500 mb-6"> USER DATA</h1>
            <UserTableComponent users={users} />
        </div>
    )
}