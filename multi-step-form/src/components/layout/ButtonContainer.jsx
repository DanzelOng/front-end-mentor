import styles from '../../styles/Button.module.css';

export default function ButtonContainer({ children }) {
    return <div className={styles.btnContainer}>{children}</div>;
}
