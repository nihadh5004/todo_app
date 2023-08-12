import React from 'react'

function TodosList(props) {
    const handleDelete=({id})=>{
        props.setTodos(props.todos.filter((todo) => todo.id !==id))
    };
    const handleTask=({id}) =>{
        props.setTodos((prevTodos) =>
          prevTodos.map((item) =>
            item.id === id ? { ...item, status: !item.status } : item
          )
        );
      };
    const handleEdit=({id})=>{
        const findTodo = props.todos.find((todo) => todo.id ===id);
        props.setEditTodo(findTodo);
    };
    return (
    <div>
        {props.todos.map((todo)=>(
            <li className='list-item' key={todo.id}>
                <input type="text" 
                value={todo.title}
                 className={`list ${todo.status ? "complete" : "" }`}
                onChange={(e)=> e.preventDefault()}
                 />

                <div>
                    <button className='button-complete task-button' onClick={()=>handleTask(todo)}>
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button className='button-edit task-button' onClick={()=>handleEdit(todo)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>

            </li>
        )
        )}
    </div>
  )
}

export default TodosList