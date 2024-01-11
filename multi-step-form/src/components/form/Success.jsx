import Button from '../button/Button';
import ButtonContainer from '../layout/ButtonContainer';
import styles from '../../styles/Success.module.css';

export default function Success({ dispatch }) {
    return (
        <div>
            <section className={styles.successContainer}>
                <div className={styles.successImgBox}>
                    <img
                        src='/images/icon-thank-you.svg'
                        alt='success checkmark icon'
                    />
                </div>
                <span className={styles.successHeading}>Thank you!</span>
                <span className={styles.successText}>
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </span>
            </section>
            <ButtonContainer>
                <Button
                    content='Resubmit'
                    style='btnResubmit'
                    type='resubmit'
                    dispatch={() => dispatch({ type: 'resubmit' })}
                />
            </ButtonContainer>
        </div>
    );
}
