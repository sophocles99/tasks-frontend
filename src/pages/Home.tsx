import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <>
      <header>Home</header>
      <main>
        <TodoList />
      </main>
      <button>
        <Link to="/addtodo">Add Todo</Link>
      </button>
    </>
  );
};

export default Home;
