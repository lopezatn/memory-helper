import { createSlice } from "@reduxjs/toolkit";

const reminderSlice = createSlice({
    name: "reminders",
    initialState: null,
    reducers: {
        createReminder: (state, action) => {
            state.reminders.push(action.payload)
        },
    },
});

export const { createReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
