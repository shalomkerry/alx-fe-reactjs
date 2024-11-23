import NavBar from "../components/NavBar";
import useTodosStore from "../stores/useTodosStore";
import AddToDo from "./AddToDo";
import { useState } from "react";

function TodoList(){
    const todo  = useTodosStore(state=>state.todos)
    const remove = useTodosStore(state=>state.removeTodo)

    const toggle = useTodosStore(state=>state.toggleTask)
      const addTodo = useTodosStore((state)=>state.addTodo)
    const [text,setToDo] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        if(text!==''){

        addTodo({title:text,id:Date.now(),completed:false })
        }
    
    }
    return(
        <>
        <NavBar/>
       
    <h1>You can add task here</h1>
<form onSubmit={handleSubmit}>
    <div className="input-group">
        <label htmlFor="todoInput">
            Insert
        </label>
            <input type="text" name= 'todoInput' value={text} onChange={(e)=>setToDo(e.target.value)} id='todoInput' />
    </div>

        <input className='submitBtn' type="submit" value='Add' />
</form>
        <div className="todo__list-container">
        {todo.map(items=>(
           <>

           <p key={items.title} className={`todo ${items.completed?'line-through': ''}`}>{items.title}

            <input type="checkbox"
             name="check"
             checked={items.completed}
             onChange={()=>toggle(items.id)}
             />
           </p>

            <button onClick={()=>{
                remove(items.id)
                console.log(todo)
            }} id={items}>Remove</button>
           </>
        ))}
        </div>
        </>
    )
}
export default TodoList;