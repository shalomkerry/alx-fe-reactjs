
import { createBrowserRouter } from "react-router-dom";


import HomePage from "../pages/HomePage";
import AddToDo from "../pages/AddToDo"
const router = createBrowserRouter([{
    path:'/',
    Component:HomePage
},{
    path:'/addToDo',
    Component:AddToDo,
},])
export default router