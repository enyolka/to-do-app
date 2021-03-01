import React, { useContext } from "react";
import { AppContext } from "../../store/StoreProvider";

const AddTask = () => {
  const { date, isImportant, toggleImportanceState } = useContext(AppContext);

  return (
    <div>
      {console.log(date)}
      {console.log(isImportant)}
      <p>Dodaj task </p>
      <button onClick={toggleImportanceState}>Dodaj</button>
    </div>
  );
};

export default AddTask;
