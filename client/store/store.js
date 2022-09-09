import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => configureStore({ reducer, devTools: true });

export const wrapper = createWrapper(makeStore);