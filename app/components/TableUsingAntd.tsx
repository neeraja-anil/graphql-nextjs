"use client";

import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";

interface Props {
  users: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }[];
  setCurrentPage: (p: number) => void;
  loading: boolean;
}
interface User {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
}
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    render: (_: User, record: User) => (
      <span>
        {record.firstName} {record.lastName}
      </span>
    ),
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
  },
];

const TableUsingAntd: React.FC<Props> = ({
  users,
  setCurrentPage,
  loading,
}) => {
  const onChange = (pagination: any) => {
    setCurrentPage(pagination.current);
  };

  return (
    <div>
      <Table
        dataSource={users}
        pagination={{ total: 30 }}
        columns={columns}
        onChange={onChange}
        className="shadow-md sm:rounded-lg shadow-dark-100"
        rowKey="id"
        loading={
          loading && {
            indicator: (
              <div>
                <Spin />
              </div>
            ),
          }
        }
      />
    </div>
  );
};

export default TableUsingAntd;
