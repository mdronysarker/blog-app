import React, { useContext, useState } from "react";
import Button from "./Button";
import { PostContext } from "../context/PostContext";

export default function FromAddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //   console.log(title, body);

  const { state, dispatch } = useContext(PostContext);

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_POST", payload: { title: title, body: body } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-6 bg-[#fff4e6] flex items-center gap-6 mb-10"
    >
      <input
        className="w-[12rem] px-[8px] py-3 border border-[#ffe8cc] focus:outline-none focus:border-2 focus:border-[#ffa94d]"
        placeholder="Post title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="flex-1 h-[50px] px-[8px] py-3 border border-[#ffe8cc] focus:outline-none focus:border-[#ffa94d]"
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <Button>Add Post</Button>
    </form>
  );
}
