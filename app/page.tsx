import React, { Suspense } from "react";
import UserComponent from "./components/UserComponent";
import { Spin } from "antd";

export default function Home() {
  return (
    <main>
      <UserComponent />
    </main>
  );
}
