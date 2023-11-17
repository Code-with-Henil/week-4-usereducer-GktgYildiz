export const initialState = { todos: [] };

export function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return { todos: [...state.todos, action.payload] };
    case "complete":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isComplete: true } : todo
        ),
      };
    case "remove":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw new Error();
  }
}
