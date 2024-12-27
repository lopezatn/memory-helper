import React, { useState } from "react";
import "./new-reminder.css";
import Navigation from "../../routes/Navigation";
import InputField from "../inputField/InputField";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { createReminder } from "../../redux/slices/reminderSlice";

const NewReminder = () => {
  const [reminder, newReminder] = useState({ title: "", description: "" });
  const [reminderAdded, setReminderAdded] = useState(false);
  const dispatch = useDispatch();

  const handleNewReminder = (event) => {
    const { name, value } = event.target;
    newReminder((prevReminder) => ({
      ...prevReminder,
      [name]: value,
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitReminder();
    }
  };

  const resetValue = () => {
    newReminder({ title: "", description: "" });
  };

  const submitReminder = () => {
    if (reminder === "") {
      alert("Field can't be empty.");
    } else {
      dispatch(createReminder(reminder));
      setReminderAdded(true);
      resetValue();
    }
  };

  return (
    <>
      <Navigation />
      <div className="home">
        <main>
          <h2>New Reminder</h2>
          <div className="reminder-box">
            <InputField
              placeholder="title"
              name="title"
              maxLength={75}
              value={reminder.title}
              onChange={handleNewReminder}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="reminder-box">
            <InputField
              placeholder="description"
              name="description"
              maxLength={75}
              value={reminder.description}
              onChange={handleNewReminder}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="button-box">
            <Button
              className="btn btn-outline-primary"
              type="button"
              value="Add reminder"
              onClick={submitReminder}
            />
          </div>
          {reminderAdded ? <span>Reminder added!</span> : ""}
        </main>
        <footer>
          <p>
            Project made by Agustin Lopez Bergero for CS50x - 2024 by David J.
            Malan
          </p>
        </footer>
      </div>
    </>
  );
};

export default NewReminder;
