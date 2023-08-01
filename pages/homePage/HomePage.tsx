import AddTodo from "@/components/addTodo/AddTodo";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen">
        <p className="text-center text-xl"> Add a tasks to todo list</p>
        <div className="flex justify-center mt-10">
          <AddTodo/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
