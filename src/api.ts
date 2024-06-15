import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const getTasks = async () => {
    const response = await axios.get("tasks/");
    return response.data;
};

const postTask = async (task: Task) => {
    await axios.post("tasks/", task);
};

const patchTask = async (id: string, taskPatch: TaskPatch) => {
    await axios.patch(`tasks/${id}`, taskPatch);
};

export { getTasks, postTask, patchTask };
