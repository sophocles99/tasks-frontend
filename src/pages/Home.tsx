import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import dateToday from "../utils/date-today";

const Home = () => {
  return (
    <>
      <p className="date">{dateToday()}</p>
      <header>To-Do List</header>
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
