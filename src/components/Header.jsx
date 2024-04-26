import React, { useContext } from "react";
import Search from "./Search";
import Button from "./Button";
import { PostContext } from "../context/PostContext";

export default function Header() {
  const { state, dispatch } = useContext(PostContext);

  const handleClick = () => {
    dispatch({ type: "SET_CLEARPOST" });
  };

  return (
    <header className="flex justify-between mb-8">
      <h1 className="flex gap-2 text-[26px] items-center font-bold">
        <span className="text-[140%]">⚛️</span>The Atomic Blog
      </h1>
      <div className="flex gap-8 items-center">
        <p className="font-bold">🚀 30 atomic posts found</p>
        <Search />
        <Button onClick={handleClick}>Clear Posts</Button>
      </div>
    </header>
  );
}
