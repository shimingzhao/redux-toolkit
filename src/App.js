import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import { Dashboard } from "./components/Dashboard";

const store = configureStore({
  reducer: rootReducer
});

export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
