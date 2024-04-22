import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const inicialState = [
  {
    id: new Date().getTime(),
    description: "Comprar Pan",
    done: false,
  },
  {
    id: new Date().getTime() * 2,
    description: "Estudiar React",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Hacer Tarea",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, inicialState);
  const handleNewTodo = (todo) => {
    console.log({ todo });
  };
  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Agragar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
