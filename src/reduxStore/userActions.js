import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value : [],
  },
  reducers: {
    addUser: (state, action) => {

      state.value.push(action.payload)
    },
    removeUser: (state, action) => {

        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser} = userSlice.actions

export default userSlice.reducer