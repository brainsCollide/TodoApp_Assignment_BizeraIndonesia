'use client'
import React, { useState, useEffect } from "react";
import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import TodoChart from "../component/TodoChart";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");


  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
const addTodo = (e) => {
  e.preventDefault();
  if (input.trim() === "") return;

  setTodos([
    ...todos,
    { id: Date.now(), text: input, completed: false } 
  ]);
  setInput("");
};

 
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo by id
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#005BB0] flex items-center justify-center px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">

        
        <div className="flex-1 bg-white rounded-3xl shadow-2xl p-8 flex flex-col hover:scale-[1.02] transition-transform duration-300">
          <h1 className="text-3xl font-extrabold text-[#F7A21D] mb-6 text-center">
            My To do List
          </h1>

          <TodoForm input={input} setInput={setInput} addTodo={addTodo} />

          <div className="mt-6 flex-1 overflow-y-auto max-h-[500px]">
            <TodoList
              todos={todos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>

       
        <div className="w-full md:w-1/3 bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Task Completion
          </h2>
          <TodoChart todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
