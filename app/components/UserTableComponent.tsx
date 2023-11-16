'use client'
import React, { FC } from 'react'

interface Props {
    users: {
        id: number,
        firstName: string,
        lastName: string,
        email: string
    }[]
}
interface User {
    id: string | number,
    firstName: string,
    lastName: string,
    email: string
}

const UserTableComponent: FC<Props> = ({ users }) => {
    return (
        <table className="w-full border border-1px-gray text-sm text-gray-500 ">
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr className='p-6'>
                    <th className='px-6 py-3'>USER ID</th>
                    <th className='px-6 py-3'>USER NAME</th>
                    <th className='px-6 py-3'>EMAIL</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-4'>
                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center'>{user.id}</td>
                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center'>{user.firstName} {user.lastName}</td>
                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center'>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTableComponent