import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Modal, TextField, Button } from '@material-ui/core'
import { updateTodo } from '../actions'

function ModalMaterial({ open, handleClose, dispatch, id }) {
	const [ input, setInput ] = useState('')

	const UpdateTodo = () => {
		dispatch(updateTodo(id, input))
	}

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<div
				style={{
					backgroundColor: 'white',
					position: 'absolute',
					top: '40%',
					left: '30%',
					width: '40%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center'
				}}
			>
				<h1>Hello</h1>
				<TextField
					id="standard-basic"
					label="Update Todo"
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button variant="contained" color="primary" onClick={UpdateTodo}>
					Update
				</Button>
			</div>
		</Modal>
	)
}

export default connect()(ModalMaterial)
