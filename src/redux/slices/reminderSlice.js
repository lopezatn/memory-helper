import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reminders: [],
};
const date = () => {
  return new Date().toLocaleString();
};

const reminderSlice = createSlice({
  name: "reminders",
  initialState: initialState,
  reducers: {
    createReminder: (state, action) => {
      state.reminders.push({ ...action.payload, creationDate: date() });
    },
  },
});

export const { createReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
