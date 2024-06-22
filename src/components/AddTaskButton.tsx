import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/AddTaskButton.module.css";

interface Props {
    type: "open" | "close";
    onClick: () => void;
}

const AddTaskButton = ({ type, onClick }: Props) => {
    return (
        <div className={styles["add-task-button"]} onClick={onClick}>
            <FontAwesomeIcon icon={type === "open" ? faPlus : faXmark} />
        </div>
    );
};

export default AddTaskButton;
