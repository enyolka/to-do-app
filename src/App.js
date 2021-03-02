import React from "react";

// import { AppContext, defaultObject } from "./AppContext";
import { AppProvider } from "./store/StoreProvider";
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

import "./App.scss";

const App = () => {
  return (
    <AppProvider>
      <div className="wrapper">
        <Header />
        {/* <TasksProvider> */}
        <AddTask />
        {/* </TasksProvider> */}
        <TaskList />
      </div>
    </AppProvider>
  );
};

export default App;
