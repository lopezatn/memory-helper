import React, { useState } from "react";
import InputField from "../inputField/InputField";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { editReminder } from "../../redux/slices/reminderSlice";

const EditReminder = ({ reminder, isEditing }) => {
  const [editedReminder, setEditedReminder] = useState(reminder);
  const dispatch = useDispatch();

  const handleEditReminder = (event) => {
    const { name, value } = event.target;
    setEditedReminder((prevReminder) => ({
      ...prevReminder,
      [name]: value,
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitReminder();
    }
  };

  const submitReminder = () => {
    dispatch(editReminder(editedReminder));
    isEditing(false);
  };

  return (
    <>
      <main className="container">
        <h5>Edit Reminder:</h5>
        <InputField
          name="title"
          maxLength={75}
          value={editedReminder.title}
          onChange={handleEditReminder}
          onKeyDown={handleKeyDown}
        />
        <InputField
          name="description"
          maxLength={75}
          value={editedReminder.description}
          onChange={handleEditReminder}
          onKeyDown={handleKeyDown}
        />
        <Button
          className="btn btn-outline-primary"
          type="button"
          value="Edit reminder"
          onClick={submitReminder}
        />
      </main>
      <footer></footer>
    </>
  );
};

export default EditReminder;
