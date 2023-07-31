import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="h-screen">
        Home
        <div>
          <Link href="/add-tasks">go to addTasks</Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
