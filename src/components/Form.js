import React,{useEffect}from 'react'
import {v4 as uuidv4} from "uuid";
function Form(props) {
    const updateTodo = (title,id,status) =>{
        const newTodo = props.todos.map((todo) =>
            todo.id === id ? {title,id,status} : todo
        )
        props.setTodos(newTodo);
        props.setEditTodo("");
    };
    useEffect(()=>{
        if (props.editTodo){
            props.setInput(props.editTodo.title);
        }else{
            props.setInput("");
        }
    } , [props.setInput,props.editTodo]);
    const onInputChange= (e)=> {
        props.setInput(e.target.value);
    };

    const onFormSubmit = (e) =>{
        e.preventDefault();
        if (!props.editTodo){
            props.setTodos([...props.todos,{id:uuidv4(),title:props.input, status:false}])
            props.setInput("");

        }else{
            updateTodo(props.input,props.editTodo.id,props.editTodo.status)
        }
    };
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text " 
         placeholder='Enter the task...'
         className='task-input' 
         value={props.input}
         required
         onChange={onInputChange} />
        <button className='button-add' type='submit'>+</button>
    </form>
  )
}

export default Form