'use client'

import React from 'react'
import { Table, Space } from 'antd'

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
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
        render: (_: User, record: User) => (
            <span>{record.firstName} {record.lastName}</span>
        )
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
        key: 'email',
    },
];


const TableUsingAntd: React.FC<Props> = ({ users }) => {
    console.log(users)
    return (
        <div>
            <Table dataSource={users} columns={columns} />
        </div>
    )
}

export default TableUsingAntd