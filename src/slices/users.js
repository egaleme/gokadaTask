import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  users: [],
};

// A slice for recipes with our three reducers
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: state => {
      state.loading = true;
    },
    getUsersSuccess: (state, {payload}) => {
      state.users = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const {getUsers, getUsersSuccess, getUsersFailure} = usersSlice.actions;

// A selector
export const usersSelector = state => state.users;

// The reducer
export default usersSlice.reducer;

// Asynchronous thunk action
export function fetchUsers() {
  return async dispatch => {
    dispatch(getUsers());

    try {
      const response = await fetch(
        // 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
        'https://reqres.in/api/users?page=2',
      );
      const data = await response.json();

      dispatch(getUsersSuccess(data.data));
      // Here, delve one layer deeper.
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
}
