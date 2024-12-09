import React, { useState } from "react";
import Navigation from "../../routes/Navigation";
import "./NewReminder.css";
import InputField from "../inputField/InputField";

const NewReminder = () => {
  const [reminder, newReminder] = useState("");

  const handleNewReminder = (event) => {
    const result = event.target.value;
    console.log(result);
  };

  return (
    <>
      <Navigation />
      <main className="container">
        <h2>New Reminder:</h2>
        <InputField onChange={handleNewReminder} />
      </main>
      <footer></footer>
    </>
  );
};

export default NewReminder;
