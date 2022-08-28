import React from 'react'

const Filter = (props) => {
  return (
    <div>
    <label>
        <input type="radio" value="all" onChange={props.handleChange} checked={props.radio === 'all'} />
        すべて
    </label>
    <label>
        <input type="radio" value="incomplete" onChange={props.handleChange} checked={props.radio === 'incomplete'} />
        作業中
    </label>
    <label>
        <input type="radio" value="complete" onChange={props.handleChange} checked={props.radio === 'complete'} />
        完了
    </label>
    </div>
  )
}

export default Filter