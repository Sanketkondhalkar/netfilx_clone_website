import { configureStore } from "@reduxjs/toolkit";
import { Fetchapi } from "../Service/Fetchapi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import Loginslicer from "./Loginslicer";

export const store = configureStore({
  reducer: {
    [Fetchapi.reducerPath]: Fetchapi.reducer,
    loginApidata: Loginslicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Fetchapi.middleware),
});
setupListeners(store.dispatch);
