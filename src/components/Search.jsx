import React from "react";

export default function Search() {
  return (
    <div>
      <input
        className="w-[12rem] border border-[#ffe8cc] px-3 py-2 text-[16px]  focus:border-2 focus:border-[#ffa94d] focus:outline-none focus:rounded-sm"
        placeholder="Search posts..."
        type="text"
      />
    </div>
  );
}
