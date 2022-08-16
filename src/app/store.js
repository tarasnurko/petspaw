import { catApi } from "../features/api/apiSlice";
import themeSlice from "../features/theme/themeSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
});
