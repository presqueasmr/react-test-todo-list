import React, { useState } from "react";

import '../styles/App.css';
import Form from "./Form";
import Todo from "./Todo";
import FilterButton from "./FilterButton";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  "Toutes les tâches": () => true,
  "Tâches en cours": task => !task.completed,
  "Tâches finies": task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('Toutes les tâches');


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

/*-----------NONE FUNCTIONAL---------------

  function deleteAllTasks(completed){
    const unfinishedTasks = tasks.filter(task => completed !== task.completed);
    setTasks(unfinishedTasks);
  }
  ----------------------------------------*/

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed}
      key={task.id}
      deleteTask={deleteTask}
      editTask={editTask}
      toggleTaskCompleted={toggleTaskCompleted}
      /*--------------NONE FUNCTIONAL-----------
      deleteAllTasks={deleteAllTasks}
      -----------------------------------*/
    />
  ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return ( 
    <div className="toDoList">
      <h1>To Do List de Auriane</h1>
      <Form addTask={addTask} />
      <h2 className="titleListTasks">Liste des tâches</h2>
      <h3><b>Trier :</b></h3> 
      <div className="filterButtons">
        {filterList}
      </div>
      <span className="ligne"></span>
      <ul>
          {taskList}
      </ul>
      <div className="btnDeleteAll">
        <button type="button" /*onClick={() => props.deleteAllTasks(props.completed)}*/</div>>Supprimer toutes tâches finies</button>
      </div>
    </div>
)
}


export default App;
