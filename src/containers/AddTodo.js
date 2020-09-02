import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { TextField, Button, Card } from '@material-ui/core'
import './addTodo.css'

function AddTodo({ dispatch }) {
	const [ input, setInput ] = useState('')
	const submitTodo = (e) => {
		e.preventDefault()
		if (!input.trim()) {
			return
		}
		dispatch(addTodo(input))
	}
	return (
		<Card raised={true} className="add_todo_container">
			<form onSubmit={submitTodo}>
				{/* <input type="text" onChange={(e) => setInput(e.target.value)} /> */}
				<TextField
					id="standard-basic"
					label="Todo"
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button variant="contained" color="primary" onClick={submitTodo}>
					Add
				</Button>
			</form>
		</Card>
	)
}

export default connect()(AddTodo)
