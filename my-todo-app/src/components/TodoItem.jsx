function TodoItem({ todo, onComplete, onRemove }) {
  return (
    <div
      className="todo-item"
      style={{ display: "flex", alignItems: "center" }}
    >
      <button onClick={() => onComplete(todo.id)}>
        {todo.isComplete ? "Completed" : "Complete"}
      </button>
      <span
        style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}
      >
        {todo.task}
      </span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
}

export default TodoItem;
