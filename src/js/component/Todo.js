import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import { RiEditCircleLine } from "react-i";
// import { AiOutlineCloseCircle } from "react-icons/ai";

function Todo(todos, completeTodo, removeTodo) {
	const [edit, setEdit] = useState({
		id: null,
		value: ""
	});

	return todos.map((todo, index) => (
		<div
			className={todo.isComplete ? "todo-row complete" : "todo=row"}
			key={index}>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.text}
			</div>
			<div className="icons">
				<button
					onClick={() => removeTodo(todo.id)}
					className="delete-icon">
					<i className="fas fa-check-circle"></i>
				</button>

				<button
					onClick={() => setEdit({ id: todo.id, value: todo.text })}
					className="edit-icon">
					<i className="fas fa-pen-square"></i>
				</button>
			</div>
		</div>
	));
}

export default Todo;
