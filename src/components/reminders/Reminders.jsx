import React from "react";
import "./Reminders.css";
import Navigation from "../../routes/Navigation";
import { useSelector } from "react-redux";

const Reminders = () => {

    const { reminders } = useSelector((state) => state.reminders)
    console.log("Reminders inside of the Slice: ", reminders);

  return (
    <>
      <Navigation />
      <main className="container">
        <h2>Your Reminders</h2>
        <div className="list-group">
          {reminders.map((reminder, index) => (
            <a
              key={index}
              href="#"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{reminder.title}</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">{reminder.description}</p>
            </a>
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Reminders;
