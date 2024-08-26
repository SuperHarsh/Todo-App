import React from 'react';
import { MdCheck, MdDelete } from "react-icons/md";


export default function TodoList({data,checked,onHandleChecked,onHandleDelete}) {
  return (
    <li className='todo-item'>
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
        <button className='check-btn' onClick={ () =>  onHandleChecked(data)}> <MdCheck/> </button>
        <button className='delete-btn' onClick={() => onHandleDelete(data)} > <MdDelete/> </button>
    </li>
  )
}




