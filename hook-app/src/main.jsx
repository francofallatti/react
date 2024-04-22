import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Memorize } from "./05-memos/Memorize";
// import { MemoHook } from "./05-memos/MemoHook";
// import { CallbackHook } from "./05-memos/CallbackHook";
// import { Padre } from "./06-tarea-memo/Padre";
// import "./07-useReducer/intro-reducer";
import { TodoApp } from "./07-useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  /* <React.StrictMode> */
  <TodoApp />
  /* </React.StrictMode> */
);
