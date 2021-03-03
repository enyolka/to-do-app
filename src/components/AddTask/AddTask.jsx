import React, { useState, useContext } from "react";
import bemCssModules from "bem-css-modules";

import { AppContext } from "../../store/StoreProvider";

import { default as AddTaskStyles } from "./AddTask.module.scss";

const style = bemCssModules(AddTaskStyles);

const AddTask = () => {
  const minDate = new Date().toISOString().slice(0, 10);
  const maxDate = new Date().toISOString().slice(0, 4) * 1 + 1 + "-12-31";

  const { tasks, setTasks } = useContext(AppContext);

  const [text, setText] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState("12:00");
  //  const { date, isImportant, toggleImportanceState } = useContext(TaskContext);

  const handleTextChange = (e) => setText(e.target.value);
  const handleImportanceChange = (e) => setIsImportant(e.target.checked);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);

  const handleAddClick = (e) => {
    const counter =
      tasks.reduce(function (prev, current) {
        return prev.id > current.id ? prev : current;
      }).id + 1;

    const newTask = {
      id: counter,
      text: text,
      date: date,
      time: time,
      important: isImportant,
      active: true,
      finishDate: null,
    };

    if (text.length > 2) {
      if (setTasks([...tasks, newTask])) {
        setText("");
        setIsImportant(false);
        setDate(minDate);
      }
    } else {
      alert("Za krótka nazwa");
    }
  };

  return (
    <div className={style()}>
      <div className={style("task")}>
        <label className={style("label")}> Zadanie: </label>
        <input
          className={style("task-input")}
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Dodaj nowe zadanie"
        />
      </div>

      <div className={style("date-time")}>
        <label htmlFor="date" className={style("label")}>
          {" "}
          Data{" "}
        </label>
        <input
          className={style("input")}
          type="date"
          value={date}
          min={minDate}
          max={maxDate}
          onChange={handleDateChange}
        />
        <label className={style("label")}>Godzina</label>
        <input
          className={style("input")}
          type="time"
          value={time}
          onChange={handleTimeChange}
        />
      </div>

      <div className={style("checkbox")}>
        <label className={style("label")}> Ważne </label>
        <input
          className={style("checkbox-box")}
          type="checkbox"
          value={isImportant}
          onChange={handleImportanceChange}
        />
      </div>

      <div className={style("btn-box")}>
        <button onClick={handleAddClick} className={style("btn")}>
          Dodaj
        </button>
      </div>
    </div>
  );
};

export default AddTask;
