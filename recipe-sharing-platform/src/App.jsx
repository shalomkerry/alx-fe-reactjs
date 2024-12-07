import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
function App() {

  return (
    <>
    <Router>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path={`/recipe`} element={<RecipeDetail/>}/>
</Routes>
    </Router>
    </>
  )
}

export default App
