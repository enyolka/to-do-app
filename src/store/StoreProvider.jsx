import { createContext, useState } from "react";

export const TasksContext = createContext();
export const AppContext = createContext();

const tasks_tab = [
  {
    id: 0,
    text: "zagrac w grę",
    date: "2021-02-16",
    time: "10:15",
    important: false,
    active: false,
    finishDate: null,
  },
  {
    id: 1,
    text: "Spotkanie z przyjaciółmi",
    date: "2020-11-12",
    time: "14:20",
    important: false,
    active: true,
    finishDate: null,
  },
  {
    id: 2,
    text: "Iśc na zakupy",
    date: "2019-09-11",
    time: "06:00",
    important: false,
    active: false,
    finishDate: null,
  },
  {
    id: 3,
    text: "Trening",
    date: "2019-05-20",
    time: "12:25",
    important: true,
    active: true,
    finishDate: null,
  },
  {
    id: 4,
    text: "Zrobić projekt",
    date: "2020-11-12",
    time: "10:20",
    important: false,
    active: true,
    finishDate: null,
  },
  {
    id: 5,
    text: "Nowy rysunek na zajęcia artstyczne w szkole",
    date: "2019-09-11",
    time: "18:40",
    important: false,
    active: true,
    finishDate: null,
  },
  {
    id: 6,
    text: "fryzjer!",
    date: "2019-05-20",
    important: true,
    time: "09:15",
    active: true,
    finishDate: null,
  },
  {
    id: 7,
    text: "Wycieczka do parku rozrywki z rodziną + piknik w parku",
    date: "2020-11-12",
    time: "10:20",
    important: false,
    active: true,
    finishDate: null,
  },
  {
    id: 8,
    text: "Prezent dla mamy",
    date: "2019-09-11",
    time: "12:20",
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
