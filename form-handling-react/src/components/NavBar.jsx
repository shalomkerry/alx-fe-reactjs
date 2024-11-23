import {Link} from 'react-router-dom'
function NavBar(){
    return(<>
   <nav>

    <li><Link to='/'>Home</Link></li>
    <li><Link to='/Register'>Register</Link></li>
    <li>
<Link to='/Sign'>Sign UP</Link>        </li>
    </nav> 

    </>)
}
export default NavBar