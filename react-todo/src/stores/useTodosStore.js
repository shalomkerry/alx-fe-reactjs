import { create } from "zustand";
const useTodosStore = create((set)=>({
    todos:[{id:1,title:'Get Something',completed:false},{id:2,title:'Eat Water',completed:false}],
    addTodo:(todo)=>set((state)=>(
    {todos:[...state.todos,todo]} 
    )),
    removeTodo:(id)=>set((state)=>({
        todos:state.todos.filter(e=>id!==e.id)
    })),
   toggleTask:(id)=>set((state)=>({
    todos:state.todos.map(task=>
        task.id===id?{...task,completed:!task.completed}:task
    )
   })) 
}))
export default useTodosStore;