import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

export default function Post() {
  const { state, dispatch } = useContext(PostContext);

  // console.log(state.post);

  return (
    <ul className="grid grid-cols-4 gap-8 hover:">
      {state.post.map((item, i) => (
        <li
          className="border border-[#ffe8cc] px-5 py-4 hover:bg-[#fff4e6] "
          key={i}
        >
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
