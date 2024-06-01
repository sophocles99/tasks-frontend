import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="addtask" element={<AddTask />} />
      </Routes>
    </div>
  );
}

export default App;
