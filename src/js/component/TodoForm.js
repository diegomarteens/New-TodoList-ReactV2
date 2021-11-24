import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const handleChange = e => {
		setInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: input
		});
		setInput("");
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="What We Need To Do"
				value={input}
				name="text"
				className="todo=input"
				onChange={handleChange}
			/>
			<button className="todo-button"> Add Todo</button>
		</form>
	);
}
export default TodoForm;
