import {create} from 'zustand'
const useTodoList = create((set)=>({
  todo:[{id:1,title:'completed',completed:false}],
  addTodo:(task)=>set((state)=>({todo:[...state.todo,task]})),
  deleteTodo:(id)=>set((state)=>({todo:state.todo.filter(item=>item.id!==id)})),
  toggleTask:(id)=>set((state)=>({todo:state.todo.map(item=>item.id===id?{...item,completed:!item.completed}:item) })),

}))
export default useTodoList;