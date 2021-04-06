import Task from '../Task';
import './styles.css';

function TaskList(){
  let tasks = [
  //   {
  //     "id": 1,
  //     "description": "Descrição 1"
  //   },
  //   {
  //     "id": 2,
  //     "description": "Descrição 2"
  //   }
  ];

  return (
    <div>
      {tasks.length ? (
        <ul className="list-tasks">
          {tasks.map(task => {
            return <Task task={task} key={task.id}/>
          })}
        </ul>
      ) : (
        <div className="no-tasks">Não existe tarefas</div>
      )}
    </div>
  );
}

export default TaskList;