import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <div className="main">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
