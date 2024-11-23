import { useState } from "react";
import NavBar from "./NavBar";
function RegistrationForm(){

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') setUsername(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const validate = () => {
    let isValid = true;
    let newErrors = { username: '', email: '', password: '' };

    if (!username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!email) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log({ username, email, password });
      // Reset form if needed
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({ username: '', email: '', password: '' });
    }
  };

    return(<>
    <NavBar/>
 <form onSubmit={handleSubmit} style={{color:'beige',display:"flex",flexDirection:'column',gap:'2em'}} >
    <label htmlFor="name">Enter Your User Name</label>
    <input type="text" name="name" value={username} onChange={(e)=>{
        setUsername(e.target.value);
      
    }} />
{errors.username?<p>{errors.username}</p>:<></>}    
    
    <label htmlFor="email">Enter Your Email</label>
    <input type="email" name="email" value={email} onChange={(e)=>{
        setEmail(e.target.value)
      
    } }/>
    {errors.email?<p>{errors.email}</p>:<></>}
    <label htmlFor="password" >Enter Your Password</label>
    <input type="password" name="password" value={password} onChange={(e)=>{
        setPassword(e.target.value)
       
    }} />
  {errors.password?<p>{errors.password}</p>:<></>}
        <input type="submit" value='Submit' />
    </form>   
    </>)
}
export default RegistrationForm;