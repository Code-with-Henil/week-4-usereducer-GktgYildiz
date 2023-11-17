import TodoItem from "./TodoItem";

function TodoList({ todos, onComplete, onRemove }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default TodoList;
