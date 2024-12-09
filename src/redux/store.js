import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import reminderSlice from "./slices/reminderSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        reminders: reminderSlice,
    },
});