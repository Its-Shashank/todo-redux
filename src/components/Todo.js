import React, { useState } from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'
import Modal from './Modal'
import { Button } from '@material-ui/core'
import './todo.css'

const Todo = ({ toggleTodo, completed, text, dispatch, id }) => {
	const [ open, setOpen ] = React.useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const RemoveTodo = (e) => {
		e.preventDefault()
		dispatch(removeTodo(id))
	}

	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: '10px'
				}}
			>
				<li
					style={{
						textDecoration: completed ? 'line-through' : 'none',
						marginRight: '20px'
					}}
					onClick={toggleTodo}
				>
					{text}
				</li>
				<span
					className="cross-btn"
					style={{ marginRight: '20px' }}
					onClick={RemoveTodo}
				>
					X
				</span>
				<Button variant="contained" color="primary" onClick={handleOpen}>
					Update Todo
				</Button>
			</div>
			{open && <Modal id={id} open={open} handleClose={handleClose} />}
		</div>
	)
}

export default connect()(Todo)
