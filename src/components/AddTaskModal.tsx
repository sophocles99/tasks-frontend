import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import styles from "../styles/AddTaskModal.module.css";
import Overlay from "./Overlay";

interface Props {
    onAddTask: (newTask: NewTask) => void;
    onClose: () => void;
}

const AddTaskModal = ({ onAddTask, onClose }: Props) => {
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
        <>
            <Overlay onClick={onClose} />
            <form className={styles["add-task-form"]} onSubmit={handleSubmit}>
                <input
                    className={styles["title-input"]}
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="New task"
                />
                <div className={styles["description-input-container"]}>
                    <textarea
                        className={styles["description-input"]}
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Task description (optional)"
                    />
                    <button className={styles["add-task-button"]} type="submit">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </form>
        </>
    );
};

export default AddTaskModal;
