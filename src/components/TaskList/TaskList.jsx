import React, { useContext, useState } from "react";
import bemCssModules from "bem-css-modules";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

import { AppContext } from "../../store/StoreProvider";
import Task from "./subcomponentes/Task";

import { default as TaskListStyles } from "./TaskList.module.scss";

const style = bemCssModules(TaskListStyles);

const TaskList = () => {
  const { tasks } = useContext(AppContext);

  const [showDiv, setShowDiv] = useState(false);

  const activeTasks = tasks.filter((task) => task.active);
  activeTasks.sort((a, b) => {
    a = a.text.toLowerCase();
    b = b.text.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  const finishedTasks = tasks.filter((task) => !task.active);
  finishedTasks.sort((a, b) => b.finishDate - a.finishDate);

  const activeTasksList = activeTasks.map((task) => (
    <Task key={task.id} task={task} />
  ));
  const finishedTasksList = finishedTasks.map((task) => (
    <Task key={task.id} task={task} />
  ));

  const hideDiv = () => setShowDiv((prev) => !prev);

  const finishedDiv = (
    <div className={style("finished")}>
      <h2 className={style("tasks-title")}>
        <button className={style("hide-btn")} onClick={hideDiv}>
          <FaRegArrowAltCircleRight />
        </button>
        Zakończone zadania
      </h2>
      <ul className={style("tasks-list")}>{finishedTasksList}</ul>
    </div>
  );

  return (
    <div className={style()}>
      <div className={showDiv ? style("active") : style("active-full")}>
        <h2 className={style("tasks-title")}>Zadania do wykonania</h2>
        <ul className={style("tasks-list")}>{activeTasksList}</ul>
      </div>
      {showDiv ? (
        finishedDiv
      ) : (
        <button className={style("hide-btn")} onClick={hideDiv}>
          <FaRegArrowAltCircleLeft />{" "}
          <p
            style={{
              textOrientation: "mixed",
              writingMode: "vertical-rl",
            }}
          >
            Zakończone
          </p>
        </button>
      )}
    </div>
  );
};

export default TaskList;
