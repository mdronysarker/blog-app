import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Archive from "../components/Archive";

export default function Home() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  return (
    <section className="max-w-[1140px] mx-auto">
      <button
        className="fixed top-0 right-0 p-4 text-[26px] bg-[#ffe8cc] border-0 leading-none "
        onClick={() => setIsFakeDark(!isFakeDark)}
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      <Header />
      <Main />
      <Archive />
    </section>
  );
}
