import React from "react";

export default function Todo(props){
    return (
    <li>
        <div>
            <input id={props.id} type="checkbox" defaultChecked={props.completed} />
            <label className="toDoLabel" htmlFor={props.id}>{props.name}</label>
        </div>
        <div>
             <button type='button'>Edit</button>
             <button type="button">Delete</button>
        </div>
    </li>
    );
}