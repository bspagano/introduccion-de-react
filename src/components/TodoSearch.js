import React from "react";
import "../css/TodoSearch.css";


 function TodoSearch() {
    const onSearchValueChange = (event) => {

    };

    return (
        <input
            className="TodoSearch" 
            placeholder="Cebolla" 
            onChange={onSearchValueChange}
        />
    )
 }
  export {TodoSearch};