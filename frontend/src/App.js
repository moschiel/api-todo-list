import TaskContextProvider from './context/TaskContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import './App.css';

function App() {
  console.log('App');
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <div className="main">
          <TaskContextProvider>
            <TaskForm />
            <TaskList />
          </TaskContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;