import styles from "../styles/Overlay.module.css";

interface Props {
    onClick: () => void;
}

const Overlay = ({ onClick }: Props) => {
    return <div className={styles["overlay"]} onClick={onClick}></div>;
};
export default Overlay;
