import React from "react";
import Search from "./Search";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex justify-between mb-8">
      <h1 className="flex gap-2 text-[26px] items-center font-bold">
        <span className="text-[140%]">⚛️</span>The Atomic Blog
      </h1>
      <div className="flex gap-8 items-center">
        <p className="font-bold">🚀 30 atomic posts found</p>
        <Search />
        <Button>Clear Posts</Button>
      </div>
    </header>
  );
}
