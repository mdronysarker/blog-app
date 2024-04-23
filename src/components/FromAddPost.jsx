import React from "react";
import Button from "./Button";

export default function FromAddPost() {
  return (
    <form className=" p-6 bg-[#fff4e6] flex items-center gap-6 mb-10">
      <input
        className="w-[12rem] px-[8px] py-3 border border-[#ffe8cc] focus:outline-none focus:border-2 focus:border-[#ffa94d]"
        placeholder="Post title"
        type="text"
      />
      <textarea
        className="flex-1 h-[50px] px-[8px] py-3 border border-[#ffe8cc] focus:outline-none focus:border-[#ffa94d]"
        placeholder="Post body"
      ></textarea>
      <Button>Add Post</Button>
    </form>
  );
}
