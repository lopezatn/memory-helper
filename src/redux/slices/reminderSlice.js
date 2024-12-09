import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reminders: [
        { title: "Give Tamara a kiss!", desc: "with kindness", id: 0 },
        { title: "Have some fun", desc: "with responsability :D", id: 1 },
        { title: "Seize your day", desc: "...or regret later", id: 2 },
    ]
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
