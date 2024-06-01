import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTask } from "../api";

const AddTask = () => {
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
    const task: Task = {
      title,
      description,
      status: "not done",
    };
    try {
      await postTask(task);
      setTitle("");
      setDescription("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header>New Task</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Task"
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
export default AddTask;
