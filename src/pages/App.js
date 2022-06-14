import React from "react";
import {TodoCounter} from "../components/TodoCounter";
import {TodoSearch} from "../components/TodoSearch";
import {TodoList} from "../components/TodoList";
import {TodoItem} from "../components/TodoItem";
import {CreateTodoButton} from "../components/CreateTodoButton";
import '../css/App.css'
function App(props) {
  const todos = [
    { text :"cortar cebolla", completed: false},
    { text :"tomar el curso de intro de React", completed: true},
    { text :"Llorar con la llorona", completed: true},
  ]
  return (
    <div className="main">
      <div className="container">
        <TodoCounter/>
        <div className="card">
          <div className="card-body">
            <TodoSearch />
            <TodoList/>
            {
              todos.map((element,index) => {
                return(
                  <TodoItem
                    key={index}
                    text={element.text}
                  />
                )
              })
            }
            <CreateTodoButton/>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;