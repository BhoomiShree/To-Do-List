import React from 'react'

function Todolist(props) {
  return (
    <ul>
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
    </ul>
  )
}

export default Todolist