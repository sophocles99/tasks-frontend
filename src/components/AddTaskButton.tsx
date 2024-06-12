import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "../styles/AddTaskButton.module.css";

const AddTaskButton = () => {
    return (
        <Link to="/add-task" className={styles["add-task-button"]}>
            <FontAwesomeIcon icon={faPlus} />
        </Link>
    );
};

export default AddTaskButton;
