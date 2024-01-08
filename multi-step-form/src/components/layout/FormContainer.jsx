import styles from '../../styles/FormContainer.module.css';

export default function FormContainer({ children }) {
    return <section className={styles.formContainer}>{children}</section>;
}
