import React, { useState } from "react";
import Navigation from "../../routes/Navigation";
import InputField from "../inputField/InputField";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { createReminder } from "../../redux/slices/reminderSlice";

const NewReminder = () => {
  const [reminder, newReminder] = useState({ title: "", description: "" });
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
      resetValue();
      alert("Reminder created");
    }
  };

  return (
    <>
      <Navigation />
      <main className="container">
        <h2>New Reminder:</h2>
        <InputField
          name="title"
          value={reminder.title}
          onChange={handleNewReminder}
          onKeyDown={handleKeyDown}
        />
        <InputField
          name="description"
          value={reminder.description}
          onChange={handleNewReminder}
          onKeyDown={handleKeyDown}
        />
        <Button
          className="btn btn-outline-primary"
          type="button"
          value="Add reminder"
          onClick={submitReminder}
        />
      </main>
      <footer></footer>
    </>
  );
};

export default NewReminder;
