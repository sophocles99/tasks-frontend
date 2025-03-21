import "./App.css";
import CategoryPicker from "./components/CategoryPicker";
import TaskList from "./components/TaskList";
import Title from "./components/Title";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Title></Title>
      <CategoryPicker></CategoryPicker>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
