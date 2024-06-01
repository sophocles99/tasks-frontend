import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add-task" element={<AddTask />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
