import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddTodo from './pages/AddTodo'
import Home from './pages/Home'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="addtodo" element={<AddTodo />} />
      </Routes>
    </div>
  )
}

export default App
