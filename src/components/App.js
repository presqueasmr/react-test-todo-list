import React, { useState } from "react";

import '../styles/App.css';
import Form from "./Form";
import Todo from "./Todo";
import { nanoid } from "nanoid";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);


  function addTask(name){
    const newTask = { id: "todo-" +
    nanoid(),
    name: name,
    completed: false};
    setTasks([...tasks, newTask])
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed}
      key={task.id}
      deleteTask={deleteTask}
      />));

  return ( 
    <div className="toDoList">
      <h1>To Do List de Auriane</h1>
      <Form addTask={addTask} />
      <ul>
          {taskList}
      </ul>
    </div>
)
}


export default App;
