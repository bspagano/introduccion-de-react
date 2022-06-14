import React from "react";
import "../css/TodoList.css";
function TodoList(props) {
    return(
        <section>
            <p>{ props.text}</p>
        </section>
    )
    
}
 export  { TodoList};