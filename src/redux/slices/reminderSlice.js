import { createSlice } from "@reduxjs/toolkit";

const reminderSlice = createSlice({
    name: "reminders",
    initialState: { reminders: ["test", "test2"] },
    reducers: {
        createReminder: (state, action) => {
            state.reminders.push(action.payload)
        },
    },
});

export const { createReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
