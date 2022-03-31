import React from "react";
import {useState} from "react";

function Task() {
    const [color, setColor] = useState(false);

    //Daug kartų
    // function changeColor() {
    //     setColor(!color);
    // }

    //Vienas kartas
    function changeColor() {
        setColor(true);
    }

    return (
        <div className="border my-3 p-2 text-center mb-5">
        <h3>{color ? "Task is done!" : "Task is not done!"}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt fugiat nam numquam provident dolor!</p>
        <button
            onClick={changeColor}
            className={color ? "btn btn-success" : "btn btn-danger"} >
        {color ? "Done!" : "Mark as done"}
        </button>
        </div>
   );
}

export default Task;