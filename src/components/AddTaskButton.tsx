import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import styles from "../styles/AddTaskButton.module.css";

const AddTaskButton = () => {
    return <>
        <Link to="/addtask" className={styles["add-task-button"]}>
            <FontAwesomeIcon icon={faPlus} />
        </Link>
    </>
};

export default AddTaskButton;
