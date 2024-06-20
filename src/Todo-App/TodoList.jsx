import React from 'react'

const TodoList = ({todolist,deletHandler}) => {
  return (
    <div>
         {todolist.map((todo,index)=>
        <div key={index}>
            <h5>{todo}&nbsp; 
            <button  className="btn-delete" onClick={()=> deletHandler(index)}>Delete</button></h5>
        </div>
        )}
    </div>
  
  )
}

export default TodoList
