import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <h1>Welcome to CoderSchool content 2.0</h1>
      <ul>
        <li>
          <Link href={"demo/coder-labs"}>coder-labs</Link>
        </li>
        <li>
          <Link href={"demo/intro-coder-labs"}>intro-coder-labs</Link>
        </li>
      </ul>
    </>
  );
};

export default index;
