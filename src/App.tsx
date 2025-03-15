import "./App.css";
import CategoryPicker from "./components/CategoryPicker";
import Title from "./components/Title";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Title></Title>
      <CategoryPicker></CategoryPicker>
    </div>
  );
}

export default App;
