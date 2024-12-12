import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reminders: []
}

const reminderSlice = createSlice({
    name: "reminders",
    initialState: initialState,
    reducers: {
        createReminder: (state, action) => {
            state.reminders.push(action.payload)
        },
    },
});

export const { createReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
