import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";

import { AppContext } from "../../../store/StoreProvider";

import { default as TaskStyles } from "./Task.module.scss";

const style = bemCssModules(TaskStyles);

const Task = ({ task }) => {
  const { tasks, setTasks } = useContext(AppContext);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const finishTask = (id) => {
    let newTasks = Array.from(tasks);
    newTasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    setTasks([...newTasks]);
  };

  const finishSpan = task.finishDate ? (
    <span>
      Zadanie zakończone: {new Date(task.finishDate).toLocaleString()}
    </span>
  ) : null;

  const doneBtn = task.active ? (
    <button className={style("done-btn")} onClick={() => finishTask(task.id)}>
      Zakończ
    </button>
  ) : (
    finishSpan
  );

  return (
    <li className={style()}>
      <p className={task.important ? style("text--important") : style("text")}>
        {task.text}
      </p>
      <span className={style("date")}>{task.date}</span>
      {doneBtn}
      <button
        className={style("delete-btn")}
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </li>
  );
};

export default Task;
