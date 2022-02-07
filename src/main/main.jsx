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

function ToDoList () {
  const [flag, setFlag] = useState('tasks')

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

  const [prompts, setPrompts] = useState([{
        text: "Напоминание - не проспать дедлайн",
    }]);

  const [more, setMore] = useState([{
        text: "Еще - вот бы попасть в Justice",
    }]);

  const addTask = text => {
    if (flag == 'tasks') {
      setTasks([...tasks, { text }]);
    }
    if (flag == 'prompts') {
      setPrompts([...prompts, { text }]);
    }
    if (flag == 'more') {
      setMore([...more, { text }]);
    }
  }
  
  function renderSwitch(param) {
    switch(param) {
      case 'tasks':
        return tasks;
      case 'prompts':
          return prompts;
      case 'more':
          return more;
    }
  }  

  return (
    <main className='main-box'>
        <div className='main-upper-box'>
            <div className='button-groupe__left'>
                <button id='button-1' style={{backgroundColor: flag == 'tasks' ? '#F4F5FE' : 'white'}} onClick={() => setFlag('tasks')}>Список</button>
                <button id='button-2' style={{backgroundColor: flag == 'prompts' ? '#F4F5FE' : 'white'}} onClick={() => setFlag('prompts')}>Напоминания</button>
                <button id='button-3' style={{backgroundColor: flag == 'more' ? '#F4F5FE' : 'white'}} onClick={() => setFlag('more')}>Еще</button>
            </div>
            <div className='button-groupe__right'>  
                <AddTaskForm addTask={addTask} />
            </div>
        </div>
        <div className="to-do-list">
            {
            renderSwitch(flag).map((item, index) => (
            <div className="todo-item-box">
                <span className='todo-item-text'>
                {item.text}
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
