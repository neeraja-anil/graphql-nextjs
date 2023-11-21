"use client";
const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Button } from "antd";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import TableUsingAntd from "./TableUsingAntd";
import { generateReport } from "../../report/GenerateReport";

interface data {
  getUsers: any;
}

const query = gql`
  query ($currentPage: Int) {
    getUsers(currentPage: $currentPage) {
      id
      firstName
      lastName
      email
    }
  }
`;

export default function UserComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  // const { data, error } = useSuspenseQuery<data>(query, {
  //   fetchPolicy: "no-cache",
  //   variables: {
  //     currentPage,
  //   },
  // });

  const [getUsers, { data, error, loading }] = useLazyQuery<data>(query, {
    fetchPolicy: "no-cache",
    variables: {
      currentPage,
    },
  });

  if (error) return `Error! ${error.message}`;
  const users = data?.getUsers;
  console.log(data);
  useEffect(() => {
    getUsers();
  }, [getUsers, currentPage]);

  return (
    <div className="m-4 space-y-1">
      <Button type="default" onClick={() => generateReport()}>
        Download
      </Button>
      <TableUsingAntd
        users={users}
        setCurrentPage={setCurrentPage}
        loading={loading}
      />
    </div>
  );
}
