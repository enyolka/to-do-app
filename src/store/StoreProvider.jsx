import { createContext, useState } from "react";

export const TasksContext = createContext();
export const AppContext = createContext();

const tasks_tab = [
  {
    id: 0,
    text: "zagrac",
    date: "2021-02-16",
    important: true,
    active: false,
    finishDate: null,
  },
  {
    id: 1,
    text: "zrobić dobry uczynej",
    date: "2020-11-12",
    important: false,
    active: true,
    finishDate: null,
  },
  {
    id: 2,
    text: "pomalować dom po sylwestrze",
    date: "2019-09-11",
    important: false,
    active: false,
    finishDate: null,
  },
  {
    id: 3,
    text: "schudnąć 30 kilogramów",
    date: "2019-05-20",
    important: true,
    active: true,
    finishDate: null,
  },
  {
    id: 4,
    text: "sprzedać butelki po piwie (20 skrzynek)",
    date: "2020-11-12",
    important: false,
    active: true,
    finishDate: null,
  },
  {
    id: 5,
    text: "jeszcze raz pomalować dom",
    date: "2019-09-11",
    important: false,
    active: true,
    finishDate: null,
  },
  {
    id: 6,
    text: "fryzjer!!!",
    date: "2019-05-20",
    important: true,
    active: true,
    finishDate: null,
  },
  {
    id: 7,
    text: "nie odbierać poleconego od komornika",
    date: "2020-11-12",
    important: false,
    active: true,
    finishDate: null,
  },
  {
    id: 8,
    text: "kupić 2 butelki litrowe",
    date: "2019-09-11",
    important: false,
    active: true,
    finishDate: null,
  },
];

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([...tasks_tab]);

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// export const TasksProvider = ({ children }) => {
//   const minDate = new Date().toISOString().slice(0, 10);

//   const [text, setText] = useState("");
//   const [isImportant, setIsImportant] = useState(false);
//   const [date, setDate] = useState(minDate);

//   return (
//     <TasksContext.Provider
//       value={{
//         text,
//         setText,
//         isImportant,
//         setIsImportant,
//         date,
//         setDate,
//       }}
//     >
//       {children}
//     </TasksContext.Provider>
//   );
// };
