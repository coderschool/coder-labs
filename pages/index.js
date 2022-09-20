import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <h1>Welcome to CoderSchool content 2.0 (beta)</h1>
      <ul>
        <h4>Demo</h4>
        <li>
          <Link href={"demo/coder-labs"}>coder-labs</Link>
        </li>
        <li>
          <Link href={"demo/intro-coder-labs"}>intro-coder-labs</Link>
        </li>
        <li>
          <Link href={"demo/practice"}>practice</Link>
        </li>
      </ul>
      <ul>
        <h4>Web Development</h4>
        <li>
          <Link href={"wv/m13/s2-a1s-calculator"}>Calculator Solution</Link>
        </li>
      </ul>
    </>
  );
};

export default index;
