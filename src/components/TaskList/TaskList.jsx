import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";

import { AppContext } from "../../store/StoreProvider";
import Task from "./subcomponentes/Task";

import { default as TaskListStyles } from "./TaskList.module.scss";

const style = bemCssModules(TaskListStyles);

const TaskList = () => {
  const { tasks } = useContext(AppContext);

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

  return (
    <div className={style()}>
      <div className={style("active")}>
        <h2 className={style("tasks-title")}>Zadania do wykonania</h2>
        <ul className={style("tasks-list")}>{activeTasksList}</ul>
      </div>
      <div className={style("finished")}>
        <h2 className={style("tasks-title")}>Zadania wykonane</h2>
        <ul className={style("tasks-list")}>{finishedTasksList}</ul>
      </div>
    </div>
  );
};

export default TaskList;
