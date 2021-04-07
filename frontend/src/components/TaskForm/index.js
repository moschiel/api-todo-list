import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';

import './styles.css';

function TaskForm(){
  console.log('TaskForm');
  const { addTask, clearList } = useContext(TaskContext);

  //const [title, setTitle] = useState('');
  //const [description, setDescription] = useState('');
  let title = "";
  let description = "";

  const handleChangeTitle = (event) => {
    //setTitle(event.target.value);
  }

  const handleChangeDescription = (event) => {
    //setDescription(event.target.value);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('handleSubmit');
    //setTitle(document.getElementById('task-title').value);
    //setDescription(document.getElementById('task-description').value);
    title = document.getElementById('task-title').value;
    description = document.getElementById('task-description').value;
    addTask(title, description);
    //setTitle('');
    //setDescription('');
  }

  const handleClearList = (event) => {
    event.preventDefault();
    clearList();
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        id="task-title" 
        onChange={handleChangeTitle}
        //value={title}
        type="text" 
        className="task-input" 
        placeholder="Add title..."
        required
      />

      <input 
        id="task-description"
        onChange={handleChangeDescription}
        //value={description}
        type="text" 
        className="task-input" 
        placeholder="Add description..."
        required
      />

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">Adicionar</button>
        <button className="btn clear-btn" onClick={handleClearList}>Limpar</button>
      </div>
    </form>
  );
}

export default TaskForm;