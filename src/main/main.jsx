import react, {useState} from 'react';
import './main.css';
import ButtonIconPlus from './ButtonIconPlus.svg';

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value)
    setValue("");
  };

  return (
    <form className='form-box' onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Введите текст"
        id='input-text'
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" id='input-btn'>Добавить<img id='input-btn__icon' src={ButtonIconPlus}></img></button> 
    </form>
  );
}

const ToDoList = () => {

  const [tasks, setTasks] = useState([{
        text: "Выбрать хостинг для сайта",
    },{
        text: "Записаться к стоматологу",
    },{
        text: "Записаться на курсы по Английскому",
    },{
        text: "Навести порядок на кухне",
    },{
        text: "Подготовить одежду к поездке",
    },{
        text: "Подготовиться к выступлению в понедельник",
    },{
        text: "Помыть машину",
    },{
        text: "Купить продукты",
    },{
        text: "Отдать проект на проверку",
    }]);

  const addTask = text => setTasks([...tasks, { text }]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    setTasks(newTasks);
  };

  return (
    <main className='main-box'>
        <div className='main-upper-box'>
            <div className='button-groupe__left'>
                <button id='button-1'>Список</button>
                <button id='button-2'>Напоминания</button>
                <button id='button-3'>Еще</button>
            </div>
            <div className='button-groupe__right'>  
                <AddTaskForm addTask={addTask} />
            </div>
        </div>
        <div className="to-do-list">
            {tasks.map((task, index) => (
            <div className="todo-item-box">
                <span className='todo-item-text' onClick={() => toggleTask(index)} >
                {task.text}
                </span>
            </div>
                ))}  
            </div>
    </main>
  );
}


export default function Main() {
    return (
        <ToDoList />
    )
}
