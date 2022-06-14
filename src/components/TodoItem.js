import React from 'react';
import '../css/Todoitem.css';
import Trash from "../img/icons8-basura-24.png"

function TodoItem(props) {
const onComplete = ()  => {
  alert("Ya completaste el todo" +  props.text);
}
  const onDelete = ()  => {
  alert("Borraste el  todo" +  props.text);
}

  return (
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
      onClick={onDelete}
      className="Icon Icon-delete"
      

      >
        <img 
          src={Trash}
          alt="icono basura"
        />
      </span>
    </li>
  );
} 

export { TodoItem };