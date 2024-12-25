const ReminderItem = ({ reminder }) => {
  return (
    <div
      className={
        reminder.finished
          ? "bg-success list-group-item list-group-item-action active"
          : "list-group-item list-group-item-action active"
      }
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{reminder.title}</h5>
        <small>{reminder.creationDate}</small>
      </div>
      <p className="mb-1">{reminder.description}</p>
    </div>
  );
};

export default ReminderItem;
