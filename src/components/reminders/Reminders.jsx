import React from "react";
import "./Reminders.css";
import Navigation from "../../routes/Navigation";

const Reminders = () => {
  const REMINDERS = [
    { title: "Give Tamara a kiss!", desc: "with kindness", id: 0 },
    { title: "Have some fun", desc: "with responsability :D", id: 1 },
    { title: "Seize your day", desc: "...or regret later", id: 2 },
  ];

  return (
    <>
      <Navigation />
      <main className="container">
        <h2>Your Reminders</h2>
        <div className="list-group">
          {REMINDERS.map((reminder) => (
            <a
              href="#"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{reminder.title}</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">{reminder.desc}</p>
            </a>
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Reminders;
