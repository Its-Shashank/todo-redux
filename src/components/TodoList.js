import React from 'react';
import Todo from './Todo';
import './todoList.css'

const TodoList = ({ todos, toggleTodo }) => (
	<ul className='todo_list'>
		{console.log(todos)}
		{todos.map((todo) => (
			<Todo key={todo.id} {...todo} toggleTodo={() => toggleTodo(todo.id)} />
		))}
	</ul>
);

export default TodoList;
