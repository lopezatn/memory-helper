import React, { useState } from "react";
import "./reminders.css";
import Navigation from "../../routes/Navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteReminder as deleteReminderAction,
  markReminderAsFinished as markReminderAsFinishedAction,
} from "../../redux/slices/reminderSlice";
import ReminderItem from "./ReminderItem";
import EditReminder from "../editReminder/EditReminder";

const Reminders = () => {
  const [isEditing, setIsEditing] = useState(null);
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
      <div className="home">
        <main>
          <h2>Reminders</h2>
          <div className="reminder-container">
            {reminders.map((reminder) => (
              <div className="reminder-box" key={reminder.id}>
                {isEditing === reminder.id ? (
                  <EditReminder reminder={reminder} isEditing={setIsEditing} />
                ) : (
                  <>
                    <ReminderItem reminder={reminder} />
                    <button className="btn btn-outline-light" onClick={() => markReminderAsFinished(reminder.id)}>
                      {reminder.finished ? "Unfinish" : "Finish"}
                    </button>
                    <button className="btn btn-outline-light" onClick={() => setIsEditing(reminder.id)}>
                      Edit
                    </button>
                    <button className="btn btn-outline-light" onClick={() => deleteReminder(reminder.id)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Reminders;
