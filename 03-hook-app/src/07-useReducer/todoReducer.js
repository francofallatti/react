export const todoReducer = (inicialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add todo":
      return [...inicialState, action.payload];
    case "[TODO] Remove todo":
      return inicialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] Toggle todo":
      return inicialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    default:
      return inicialState;
  }
};
