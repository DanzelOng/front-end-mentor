import styles from '../../styles/ErrorMsg.module.css';

export default function ErrorMsg({ style, content }) {
    return (
        <span className={`${styles.errMsg} ${styles[style]}`}>{content}</span>
    );
}
