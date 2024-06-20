import React,{useState} from 'react'
import TodoList from './TodoList';
import './TodoComponent.css';
import './TodoList.css';

const TodoComponent = () => {
  const[task,setTask] =useState("");
  const[todos,setTodos]=useState([]);

  const changeHandler=(e)=>{
    setTask(e.target.value);
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask("");
  }

  const deletHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=> index !== indexValue)
    setTodos(newTodos); 
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>Todo Management Application</h4>
            <form onSubmit={submitHandler}>
              <input type="text" name='task' value={task} onChange={changeHandler}  className="input-task"/>&nbsp;&nbsp;
              <input type="submit" name="Add" value="Add" className="btn-add"/>
            </form><br />
            <TodoList todolist={todos} deletHandler={deletHandler}/>
          </div>
        </div>
      </center>
      
    </div>
  )
}

export default TodoComponent
