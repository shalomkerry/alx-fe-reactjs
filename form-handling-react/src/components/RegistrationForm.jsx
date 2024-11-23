import { useState } from "react";
import NavBar from "./NavBar";
function RegistrationForm(){


    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[errors,setErrors] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        console.log(username,email,password)
    }

    return(<>
    <NavBar/>
 <form onSubmit={handleSubmit} style={{color:'beige',display:"flex",flexDirection:'column',gap:'2em'}} >
    <label htmlFor="name">Enter Your User Name</label>
    <input type="text" name="name" value={username} onChange={(e)=>{
        setUsername(e.target.value);
        if(!username){
            error=true
        }
    }} required/>
    
    <label htmlFor="email">Enter Your Email</label>
    <input type="email" name="email" value={email} onChange={(e)=>{
        setEmail(e.target.value)
        if(!email){
            error=true;
        }
    } }required/>
    <label htmlFor="password" >Enter Your Password</label>
    <input type="password" name="password" value={password} onChange={(e)=>{
        setPassword(e.target.value)
       
    }} required/>
    {function validate(){
        if(!password){
        return 'error'
    }}}
        <input type="submit" value='Submit' />
    </form>   
    </>)
}
export default RegistrationForm;