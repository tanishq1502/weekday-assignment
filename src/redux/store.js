import { configureStore } from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";

import { rootReducer } from "./reducers/reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [thunk],
  devTools: import.meta.env.VITE_WORKING_ENVIRONMENT === "LOCAL", //to disable redux devtools in other than develoment environment
});

export { store };
