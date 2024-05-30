import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import dateToday from "../utils/date-today";

const Home = () => {
  return (
    <>
      <header>
        <p className="date">{dateToday()}</p>
        <h1>To-Do List</h1>
      </header>
      <main>
        <section>
          <TodoList />
        </section>
        <section>
          <button>
            <Link to="/addtodo">Add Todo</Link>
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
