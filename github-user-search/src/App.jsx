import { useState } from 'react'
import './App.css'

function App() {
  const [userName,setUserName] = useState('')
const handleSubmit = (e) => {
  e.preventDefault();
console.log('so')
}
  return (
    <>
    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <label htmlFor="text">Enter User Name</label>
     <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
     <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default App
