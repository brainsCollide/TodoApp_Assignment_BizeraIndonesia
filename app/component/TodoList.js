'use client'
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  if (todos.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No todos yet. Add one!</p>;
  }

  return (
    <div className="max-h-[300px] overflow-y-auto px-1">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
