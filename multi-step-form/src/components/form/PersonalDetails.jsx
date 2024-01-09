import styles from '../../styles/PersonalDetails.module.css';

export default function PersonalDetails({ formDetails, dispatch }) {
    const { name, email, phoneNumber } = formDetails;
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
                        type='text'
                        name='name'
                        placeholder='e.g. Stephen King'
                        value={name === null || !name ? '' : name}
                        onChange={(e) =>
                            dispatch({ type: 'name', payload: e.target.value })
                        }
                    />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='e.g stephenking@lorem.com'
                        value={email === null || !email ? '' : email}
                        onChange={(e) =>
                            dispatch({ type: 'email', payload: e.target.value })
                        }
                    />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor='number'>Phone Number</label>
                    <input
                        inputMode='numeric'
                        type='text'
                        name='email'
                        placeholder='e.g +1 234 567 890'
                        value={
                            phoneNumber === null || !phoneNumber
                                ? ''
                                : phoneNumber
                        }
                        onChange={(e) =>
                            dispatch({
                                type: 'phoneNumber',
                                payload: e.target.value,
                            })
                        }
                    />
                </div>
            </form>
        </div>
    );
}
