import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Preview from './components/Preview.jsx';

ReactDOM.createRoot(root).render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<App/>}/>
  <Route path='/preview' element={<Preview/>}/>
</Routes>
</BrowserRouter>
)
