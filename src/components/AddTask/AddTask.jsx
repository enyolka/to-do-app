import React, { useState } from "react";
import bemCssModules from "bem-css-modules";

// import { TaskContext } from "../../store/StoreProvider";

import { default as AddTaskStyles } from "./AddTask.module.scss";

const style = bemCssModules(AddTaskStyles);

const AddTask = () => {
  const minDate = new Date().toISOString().slice(0, 10);
  const maxDate = new Date().toISOString().slice(0, 4) * 1 + 1 + "-12-31";

  const [text, setText] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [date, setDate] = useState(minDate);
  //  const { date, isImportant, toggleImportanceState } = useContext(TaskContext);

  const handleTextChange = (e) => setText(e.target.value);
  const handleImportanceChange = (e) => setIsImportant(e.target.checked);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleAddClick = (e) => {
    if (text.length > 2) {
      if (true) {
        setText("");
        setIsImportant(false);
        setDate(this.minDate);
      }
    } else {
      alert("Za krótka nazwa");
    }
  };

  return (
    <div className={style()}>
      <form>
        <div className={style("task")}>
          <label> Zadanie: </label>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Dodaj nowe zadanie"
          />
        </div>

        <div className={style("checkbox")}>
          <label> Ważne </label>
          <input
            type="checkbox"
            value={isImportant}
            onChange={handleImportanceChange}
          />
        </div>

        <div className={style("date")}>
          <label htmlFor="date"> Czas wykonania </label>
          <input
            type="date"
            value={date}
            min={minDate}
            max={maxDate}
            onChange={handleDateChange}
          />
        </div>

        <div className={style("btn")}>
          <button onClick={handleAddClick}>Dodaj</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
