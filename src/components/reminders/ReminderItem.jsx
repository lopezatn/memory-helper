import "./reminder-item.css";

const ReminderItem = ({ reminder }) => {
  return (
    <div
      className={
        reminder.finished
          ? "bg-success list-group-item list-group-item-action active"
          : "list-group-item list-group-item-action active"
      }
    >
      <div className="title-date-desc-container">
        <small>{reminder.creationDate}</small>
        <h5 className="">{reminder.title}</h5>
      </div>
      <p className="title-date-desc-container">{reminder.description}</p>
    </div>
  );
};

export default ReminderItem;
