import React, { useState } from "react";

export default function Todo(props){
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }
      
    const editingTemplate = (
        <form className="editingView" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor={props.id}>Modifier le nom : </label>
                <input id={props.id} type="text" value={newName} onChange={handleChange} />
            </div>
            <div className="btn-group">
                <button type="submit" className="btnEdit">
                    Enregistrer
                </button>

                <button type="button" className="btnDelete"
                    onClick={() => setEditing(false)}>
                    Annuler
                </button>
            </div>
        </form>
      );

      const viewTemplate = (
        <div className="containerTaskList">
            <div className="taskTitle">
                <input id={props.id} type="checkbox" defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}/>
                <label htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btnEdit" onClick={() => setEditing(true)}>
                    Modifier 
                </button>

                <button
                    type="button"
                    className="btnDelete"
                    onClick={() => props.deleteTask(props.id)}>
                    Supprimer
                </button>
            </div>
        </div>
      );

    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}