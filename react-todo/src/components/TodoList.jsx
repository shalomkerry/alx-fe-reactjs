import useTodoList from "../stores/useTodoList";
import { useState } from "react";
const TodoList = ()=>{
    const [task,setTask]=useState('')
    const {todo,addTodo,deleteTodo,toggleTask} = useTodoList();
    function handleSubmit(e){
        e.preventDefault();
        if(task!==''){

    addTodo({id:Date.now(),title:task,completed:false})
        }else{

        alert('you haven entered nothing')
        }
    }
return<>
<form onSubmit={handleSubmit} style={{marginBottom:'2em'}}>
    <input type="text" name="task" id="task" placeholder="Enter Task" value={task} onChange={(e)=>setTask(e.target.value)} />
    <input type="submit" style={{display:"block",marginTop:'3px'}} value={'submit'} />

</form>
<div className="todo__list-container">
    <h1>Tasks</h1>
        {todo.map(items=>(

<>
           <p key={items.title} className={`todo ${items.completed?'line-through': ''}`}>{items.title}

            <input type="checkbox"
             name="check"
             checked={items.checked}
             onChange={()=>toggleTask(items.id)}
             />
           </p>

            <button onClick={()=>{
            deleteTodo(items.id)
                console.log(todo)
            }} id={items}>Remove</button>
           </>
        ))}
        </div>
</>
}
export default TodoList;