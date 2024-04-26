import React, { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";

export const PostContext = createContext("");

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const initialState = {
  post: Array.from({ length: 30 }, () => createRandomPost()),
  ClearPost: null,
  ArcivePost: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POST":
      return {
        ...state,
        post: [...state.post, action.payload],
      };
    case "SET_CLEARPOST":
      return { ...state, post: [] };
    case "SET_ARCIVEPOST":
      return { ...state, type: action.payload };
    default:
      return state;
  }
};

export default function PostProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
}
