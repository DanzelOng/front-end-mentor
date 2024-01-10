import ErrorMsg from '../error/ErrorMsg';
import styles from '../../styles/PersonalDetails.module.css';

export default function PersonalDetails({ formDetails, dispatch }) {
    const { name, email, phoneNumber, inputStatus } = formDetails;
    const { nameStatus, emailStatus, phoneNumberStatus } = inputStatus;

    return (
        <div>
            <section className={styles.userDetails}>
                <span className={styles.detailsHeading}>Personal info</span>
                <span className={styles.detailsSubHeading}>
                    Please provide your name, email address, and phone number.
                </span>
            </section>
            <form className={styles.form} autoComplete='off'>
                <div className={styles.formInput}>
                    <label htmlFor='name'>Name</label>
                    <input
                        className={`${
                            nameStatus !== 'valid' && nameStatus
                                ? styles.invalid
                                : ''
                        } ${nameStatus === 'valid' ? styles.valid : ''}`}
                        type='text'
                        name='name'
                        placeholder='e.g. Stephen King'
                        value={name || ''}
                        onChange={(e) =>
                            dispatch({ type: 'name', payload: e.target.value })
                        }
                    />
                    {nameStatus === 'empty' && (
                        <ErrorMsg
                            style='form'
                            content='This field is required'
                        />
                    )}
                    {nameStatus === 'contain-special' && (
                        <ErrorMsg
                            style='form'
                            content='No digits or special characters'
                        />
                    )}
                    {nameStatus === 'invalid-length' && (
                        <ErrorMsg style='form' content='Minimum of 3 letters' />
                    )}
                </div>
                <div className={styles.formInput}>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        className={`${
                            emailStatus !== 'valid' && emailStatus
                                ? styles.invalid
                                : ''
                        } ${emailStatus === 'valid' ? styles.valid : ''}`}
                        type='text'
                        name='email'
                        placeholder='e.g stephenking@lorem.com'
                        value={email || ''}
                        onChange={(e) =>
                            dispatch({
                                type: 'email',
                                payload: e.target.value,
                            })
                        }
                    />
                    {emailStatus === 'empty' && (
                        <ErrorMsg
                            style='form'
                            content='This field is required'
                        />
                    )}
                    {emailStatus === 'invalid' && (
                        <ErrorMsg style='form' content='Invalid email format' />
                    )}
                </div>
                <div className={styles.formInput}>
                    <label htmlFor='number'>Phone Number</label>
                    <input
                        className={`${
                            phoneNumberStatus !== 'valid' && phoneNumberStatus
                                ? styles.invalid
                                : ''
                        } ${phoneNumberStatus === 'valid' ? styles.valid : ''}`}
                        inputMode='numeric'
                        type='text'
                        name='email'
                        placeholder='e.g +1 234 567 890'
                        maxLength={10}
                        value={phoneNumber || ''}
                        onChange={(e) =>
                            dispatch({
                                type: 'phoneNumber',
                                payload: e.target.value,
                            })
                        }
                    />
                    {phoneNumberStatus === 'empty' && (
                        <ErrorMsg
                            style='form'
                            content='This field is required'
                        />
                    )}
                    {phoneNumberStatus === 'invalid' && (
                        <ErrorMsg style='form' content='Must have 10 digits' />
                    )}
                </div>
            </form>
        </div>
    );
}
