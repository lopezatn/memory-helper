import "./ReminderItem.css";

const ReminderItem = ({ reminder }) => {
  return (
    <>
      <div
        className={
          reminder.finished
            ? "finished-icon padding-l title-date-desc-container"
            : "title-date-desc-container"
        }
      >
        <small className="reminder-date">{reminder.finished ? '' : reminder.creationDate}</small>
        <h5>{reminder.title}</h5>
      </div>
      <p className={reminder.finished ? "description" : ""}>{reminder.description}</p>
    </>
  );
};

export default ReminderItem;
