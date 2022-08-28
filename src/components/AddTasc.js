import React from 'react'

const AddTasc = (props) => {
  return (
    <div>
    <h2>新規タスクの追加</h2>
    <div>
      <input value={props.todoText} onChange={props.onChangeTodoText} />
      <button onClick={props.onClickAdd}>追加</button>
    </div>
    </div>
  )
}

export default AddTasc