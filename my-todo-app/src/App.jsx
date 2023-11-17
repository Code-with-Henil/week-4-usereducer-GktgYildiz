import { useReducer } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { todoReducer, initialState } from "./todoReducer";
import "./index.css";
function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (task) => {
    dispatch({
      type: "add",
      payload: { id: Date.now(), task, isComplete: false },
    });
  };

  const completeTodo = (id) => {
    dispatch({ type: "complete", payload: id });
  };

  const removeTodo = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  return (
    <div className="app-container">
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        todos={state.todos}
        onComplete={completeTodo}
        onRemove={removeTodo}
      />
    </div>
  );
}

export default App;
