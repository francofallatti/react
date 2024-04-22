export const todoReducer = (inicialState = [], action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Action.type = ABC no implementada todavia");

    default:
      return inicialState;
  }
};
