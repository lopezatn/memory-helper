import "./reminder-item.css";

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
        <small>{reminder.creationDate}</small>
        <h5 className="">{reminder.title}</h5>
      </div>
      <p className="title-date-desc-container">{reminder.description}</p>
    </>
  );
};

export default ReminderItem;
