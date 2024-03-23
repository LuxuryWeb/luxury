import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // Import your user slice reducer

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
