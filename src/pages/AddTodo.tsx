import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTodo } from "../api";

const AddTodo = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const todo: Todo = {
      title,
      description,
      status: "not done",
    };
    try {
      await postTodo(todo);
      setTitle("");
      setDescription("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header>New To-do</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="To-do"
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button>Create</button>
      </form>
    </>
  );
};
export default AddTodo;
