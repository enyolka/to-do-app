import React from "react";
import bemCssModules from "bem-css-modules";

import { default as TaskListStyles } from "./TaskList.module.scss";

const style = bemCssModules(TaskListStyles);

const TaskList = () => {
  return <div className={style()}>Lista</div>;
};

export default TaskList;
