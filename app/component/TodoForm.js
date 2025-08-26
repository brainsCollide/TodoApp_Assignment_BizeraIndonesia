'use client'
import React from "react";

const TodoForm = ({ input, setInput, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[#005BB0] text-white rounded-lg hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
