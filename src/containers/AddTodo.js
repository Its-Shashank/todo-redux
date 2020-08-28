import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

function AddTodo({dispatch}) {
  const [input, setInput] = useState('')
  // let input;
  const submitTodo = e => {
    e.preventDefault()
    if (!input.trim()) {
      return
    }
    dispatch(addTodo(input))
  }
  return (
    <div>
      <form onSubmit={submitTodo}>
        <input type="text" onChange={e => setInput(e.target.value)} />
        {console.log(input)}
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
