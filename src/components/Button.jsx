import React from "react";

export default function Button({ children }) {
  return (
    <button className="border border-[#ffa94d] bg-[#ffa94d] font-bold px-6 py-[9px] text-[14px]">
      {children}
    </button>
  );
}
