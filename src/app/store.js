import { catApi } from "../features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
});
