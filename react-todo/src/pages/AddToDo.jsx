import { useState } from "react";
import NavBar from "../components/NavBar";
import useTodosStore from "../stores/useTodosStore";
function AddToDo(){

    const addTodo = useTodosStore((state)=>state.addTodo)
    const [text,setToDo] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        addTodo({title:text,id:Date.now(),completed:false })
    
    }
    
    return <>
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
    </>
}
export default AddToDo;