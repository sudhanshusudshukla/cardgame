import { createStore } from "redux";

import rootReducers from "./rootReducers";
//import { configureStore } from "@reduxjs/toolkit";

const store = createStore(rootReducers);

export default store;
