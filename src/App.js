import React from "react";

import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
