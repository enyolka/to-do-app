import React, { useState } from "react";

// import { AppContext, defaultObject } from "./AppContext";
import { AppProvider } from "./store/StoreProvider";
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

import "./App.scss";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClick = () => setIsModalOpen(true);

  const handleOnClose = () => setIsModalOpen(false);

  return (
    <AppProvider>
      <div className="wrapper">
        <Header />
        {/* <TasksProvider> */}
        <button className="wrapper__btn" onClick={handleOnClick}>
          +
        </button>
        <AddTask handleOnClose={handleOnClose} isModalOpen={isModalOpen} />
        {/* </TasksProvider> */}
        <TaskList />
      </div>
    </AppProvider>
  );
};

export default App;
