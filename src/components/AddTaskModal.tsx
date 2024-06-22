import { FormEvent, useState } from "react";

interface Props {
    onAddTask: (newTask: NewTask) => void;
}

const AddTaskModal = ({ onAddTask }: Props) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newTask: NewTask = {
            title,
            description,
        };
        onAddTask(newTask);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task"
            />
            <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskModal;
