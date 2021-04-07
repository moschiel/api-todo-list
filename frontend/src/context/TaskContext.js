import React, { createContext, useEffect, useState } from 'react'
import api from '../service/api'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  console.log('TaskContextProvider');
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks(){
      console.log('getTasks');
      try {
        const { data } = await api.get('/');
        setTasks(data);
      } catch (error) {
        console.log('Ocorreu um erro inesperado' + error);
      }
    }
    getTasks();
  }, []);

  const addTask = async (title, description) => {
    console.log('addTask');
    try {
      const { data } = await api.post('/', {
        title,
        description
      });
      setTasks([...tasks, data]);
    } catch (error) {
      console.log('Ocorreu um erro ao adicionar o registro' + error);
    }
  }

  const removeTask = async (id) => {
    console.log('removeTask');
    try {
      await api.delete('/' + id)
      const tasksFiltered = tasks.filter(task => task.id !== id);
      setTasks(tasksFiltered);
    } catch (error) {
      console.log('Ocorreu um erro ao excluir o registro' + error);
    }
  }

  const clearList = () => {
    console.log('clearList');
    setTasks([]);
  }

  return (
    <TaskContext.Provider
      value={{ 
        tasks,
        addTask,
        clearList,
        removeTask
      }} 
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;