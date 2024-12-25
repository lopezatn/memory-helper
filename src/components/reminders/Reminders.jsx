import React, { useState } from "react";
import "./Reminders.css";
import Navigation from "../../routes/Navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteReminder as deleteReminderAction,
  editReminder as editReminderAction,
  markReminderAsFinished as markReminderAsFinishedAction,
} from "../../redux/slices/reminderSlice";
import ReminderItem from "./ReminderItem";
import EditReminder from "../editReminder/EditReminder";

const Reminders = () => {
  const [isEditing, setIsEditing] = useState();
  const { reminders } = useSelector((state) => state.reminders);
  const dispatch = useDispatch();

  const markReminderAsFinished = (id) => {
    dispatch(markReminderAsFinishedAction(id));
  };

  const deleteReminder = (id) => {
    dispatch(deleteReminderAction(id));
  };

  return (
    <>
      <Navigation />
      <main className="container">
        <h2>Your Reminders</h2>
        <div className="list-group">
          {reminders.map((reminder) => (
            <div className="list-item" key={reminder.id}>
              {isEditing === reminder.id ? (
                <EditReminder reminder={reminder} isEditing={setIsEditing} />
              ) : (
                <>
                  <ReminderItem reminder={reminder} />
                  <button onClick={() => markReminderAsFinished(reminder.id)}>
                    Finished
                  </button>
                  <button onClick={() => setIsEditing(reminder.id)}>
                    Edit
                  </button>
                  <button onClick={() => deleteReminder(reminder.id)}>
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Reminders;
