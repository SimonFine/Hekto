import styles from "./Error.module.scss";

const Error: React.FC<{ message: string }> = ({ message }) => {
    return (
        <div className={styles.error}>
            <h2 className={styles.message}>{message}</h2>
        </div>
    );
}

export default Error;