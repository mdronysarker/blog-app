import { faker, tr } from "@faker-js/faker";
import React, { useState } from "react";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export default function Archive() {
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 10000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  //   console.log(posts);

  return (
    <aside>
      <h2 className="uppercase mb-6 text-[#333]">POST ARCHIVe</h2>
      {showArchive ? (
        <button
          onClick={() => setShowArchive(false)}
          className="bg-[#ffa94d] py-[9px] px-[24px] font-bold mb-6"
        >
          Hide archive posts
        </button>
      ) : (
        <button
          onClick={() => setShowArchive(true)}
          className="bg-[#ffa94d] py-[9px] px-[24px] font-bold mb-6"
        >
          Show archive posts
        </button>
      )}

      {showArchive &&
        posts.map((item, i) => {
          //   console.log(item);
          return (
            <ul key={i}>
              <li className="flex justify-between items-center border border-[#ffe8cc] py-1 px-2">
                <p>
                  <strong>{item.title}:</strong>
                  {item.body}
                </p>
                <button className="bg-[#ffa94d] py-[4px] px-[8px] font-bold ">
                  Add as new post
                </button>
              </li>
            </ul>
          );
        })}
    </aside>
  );
}
