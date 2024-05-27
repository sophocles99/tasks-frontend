import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const getTodos = async () => {
  const response = await axios.get("todos/");
  return response.data;
};

const postTodo = async (todo: Todo) => {
  await axios.post("todos/", todo);
};

export { getTodos, postTodo };
