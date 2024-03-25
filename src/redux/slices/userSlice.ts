import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { RootState } from "../store";
import { User } from "@/types";
import axios from "axios";

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } =
  userSlice.actions;

export const fetchUsersAsync = (): any => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchUsersStart());
    const { data } = await axios.post("http://localhost:3000/api/getusers");
    console.log(data);
    if (!data) {
      throw new Error("Failed to fetch users");
    }
    dispatch(fetchUsersSuccess(data.users));
  } catch (error: any) {
    dispatch(fetchUsersFailure(error.message));
  }
};

// Selector to get users from the state
export const selectUsers = (state: RootState) => state.user.users;

export default userSlice.reducer;
