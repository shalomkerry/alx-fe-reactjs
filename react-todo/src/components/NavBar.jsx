import { Link } from "react-router-dom";

function NavBar(){
    
    return( <nav style={{color:'blue',display:'flex',gap:'100px'}}>
        <Link to='/' className="logo">TODO APP</Link>
        
        <Link to='/' style={{marginLeft:'auto'}}>Home</Link>
        <Link to = '/addToDo'>Add to Do</Link>


    </nav>
    )
}
export default NavBar;