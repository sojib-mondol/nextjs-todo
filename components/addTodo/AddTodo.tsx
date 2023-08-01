"use client";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DataFetchAndShow from "../dataFetchAndShow/DataFetchAndShow";
import useSWR from 'swr';



const AddTodo = () => {

  //for getting data
  const getApiUrl ='http://localhost:5000/todo';

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const formData = {
        todoName: data?.todoName,
      };
      //console.log(formData);
      fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Successfully added.");
         
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error?.message);
    }
    reset();
  };

  return (
    <div className="form-control">
      <form onSubmit={handleSubmit(onSubmit)} className="input-group">
        <input
          type="text"
          placeholder="add todo"
          className="input input-bordered"
          {...register("todoName", { required: true })}
        />
        {errors.todoName && (
          <p role="alert" className="text-red-600">
            {errors.todoName.message}
          </p>
        )}
        <button type="submit" className="btn btn-square">
          Add
        </button>
      </form>

      {/* Data Feathc and show */}
      <DataFetchAndShow apiUrl={getApiUrl} />

    </div>
  );
};

export default AddTodo;
