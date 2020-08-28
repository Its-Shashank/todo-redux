import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions';

const Todo = ({ toggleTodo, completed, text, dispatch, id }) => {
	const RemoveTodo = (e) => {
		e.preventDefault();
		dispatch(removeTodo(id));
	};
	return (
		<div style={{ display: 'flex' }}>
			<li
				style={{
					textDecoration: completed ? 'line-through' : 'none',
					marginRight: '20px'
				}}
				onClick={toggleTodo}
			>
				{text}
			</li>
			<span onClick={RemoveTodo}>X</span>
		</div>
	);
};

export default connect()(Todo);
