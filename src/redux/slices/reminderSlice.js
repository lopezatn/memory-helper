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
    },
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
        finished: false,
      });
    },
    markReminderAsFinished: (state, action) => {
      const reminderId = action.payload;
      const reminder = state.reminders.find(
        (reminder) => reminder.id === reminderId
      );
      if (reminder) {
        reminder.finished = !reminder.finished;
      }
    },
    editReminder: (state, action) => {
      const { title, description, id } = action.payload;
      const reminder = state.reminders.find((reminder) => reminder.id === id);
      if (reminder) {
        reminder.title = title;
        reminder.description = description;
        reminder.creationDate = date();
      }
    },
    deleteReminder: (state, action) => {
      const idToDelete = action.payload;
      const remindersArr = state.reminders.filter(
        (reminder) => reminder.id !== idToDelete
      );
      return {
        ...state,
        reminders: remindersArr,
      };
    },
    updateRemindersOrder: (state, action) => {
      const {draggedItemIndex, index} = action.payload;
      const draggedItem = state.reminders.find((reminder, index) => index === draggedItemIndex);
      const filteredReminders = state.reminders.filter((reminder, index) => index !== draggedItemIndex);
      filteredReminders.splice(index, 0, draggedItem);
      state.reminders = filteredReminders;
    },
  },
});

export const {
  createReminder,
  markReminderAsFinished,
  editReminder,
  deleteReminder,
  updateRemindersOrder,
} = reminderSlice.actions;

export default reminderSlice.reducer;
