import { configureStore } from "@reduxjs/toolkit";
import reminderSlice from "./slices/reminderSlice";

export default configureStore({
    reducer: {
        reminders: reminderSlice,
    },
});