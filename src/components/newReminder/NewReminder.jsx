import React, { useState } from "react";
import Navigation from "../../routes/Navigation";
import InputField from "../inputField/InputField";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { createReminder } from "../../redux/slices/reminderSlice";

const NewReminder = () => {
  const [reminder, newReminder] = useState("");
  const dispatch = useDispatch();

  const handleNewReminder = (event) => {
    newReminder(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitReminder();
    }
  };

  const submitReminder = () => {
    if (reminder === "") {
      alert("Field can't be empty.");
    } else {
      dispatch(createReminder(reminder));
    }
  };

  return (
    <>
      <Navigation />
      <main className="container">
        <h2>New Reminder:</h2>
        <InputField onChange={handleNewReminder} onKeyDown={handleKeyDown} />
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
