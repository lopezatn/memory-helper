import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reminders: [
    {
      id: 1,
      title: "Example title",
      description: "Example description",
      finished: false,
    },
    {
      id: 2,
      title: "Another example title",
      description: "Another description",
      finished: false,
    }
  ],
  selectedReminder: null,
};
const date = () => {
  return new Date().toLocaleString();
};

const generateId = () => {
  let id = Math.floor(Math.random() * 1000000);
  return id;
};

const reminderSlice = createSlice({
  name: "reminders",
  initialState: initialState,
  reducers: {
    createReminder: (state, action) => {
      state.reminders.push({
        ...action.payload,
        creationDate: date(),
        id: generateId(),
      });
    },
    markReminderAsFinished: (state, action) => {
      const reminderId = action.payload;
      const reminder = state.reminders.find(
        (reminder) => reminder.id === reminderId
      );
      if (reminder) {
        reminder.finished = true;
      }
    },
    editReminder: (state, action) => {
      const { title, description, id } = action.payload;
      const reminder = state.reminders.find((reminder) => reminder.id === id);
      if (reminder) {
        reminder.title = title;
        reminder.description = description;
      }
    },
    deleteReminder: (state, action) => {
      console.log("deleteReminder called");
      const idToDelete = action.payload;
      console.log("idToDelete", idToDelete, typeof idToDelete);
      const remindersArr = state.reminders.filter(
        (reminder) => reminder.id !== idToDelete
      );
      console.log("remindersArr", remindersArr);
      return {
        ...state,
        reminders: remindersArr,
      };
    },
  },
});

export const {
  createReminder,
  markReminderAsFinished,
  editReminder,
  deleteReminder,
} = reminderSlice.actions;

export default reminderSlice.reducer;
