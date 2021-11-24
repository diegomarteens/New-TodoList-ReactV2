import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		if (!todo.text || /ˆ\s*$/.test(todo.text)) {
			return;
		}

		const newTodo = [todo, ...todos];

		setTodos(newTodo);
	};

	const removeTodo = id => {
		const removeArr = [...todos].filter(todo => todo.id !== id);

		setTodos(removeArr);
	};

	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);

		return (
			<div>
				<h1> What We Need Todo</h1>
				<TodoForm onSubmit={addTodo} />
				<Todo
					todos={todos}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
				/>
			</div>
		);
	};
}
export default TodoList;
