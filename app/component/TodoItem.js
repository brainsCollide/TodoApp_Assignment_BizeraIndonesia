'use client'
import React from "react";
import { TiDelete } from "react-icons/ti";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between bg-[#E0E0E0] px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-4 h-4 accent-blue-500 cursor-pointer"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        <TiDelete size={22} />
      </button>
    </li>
  );
};

export default TodoItem;
