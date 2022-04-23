import React, { useState } from "react";

function Form(props) {

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }
    return(
    <form onSubmit={handleSubmit}>
        <h2>Formulaire des tâches</h2>
        <label className='formTitle'>A faire</label>
        <input type="text" className="formInput" value={name} onChange={handleChange} />
        <button type="submit" className='formBtn'>Ajouter une tâche</button>
    </form>
    );
}

export default Form;