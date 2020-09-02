let nextTodoId = 0;
export const addTodo = (text) => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
});

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
});

export const removeTodo = (id) => ({
	type: 'REMOVE_TODO',
	id
});
export const updateTodo = (id, text) => {
	return {
		type: 'UPDATE_TODO',
		id,
		text
	};
};

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};
