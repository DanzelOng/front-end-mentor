import { pickAddOns } from '../../utils/data';
import styles from '../../styles/AddOns.module.css';

export default function AddOns({ formDetails, dispatch }) {
    const { addOns, billByMonth } = formDetails;

    return (
        <div>
            <section className={styles.addOnTitle}>
                <span className={styles.addOnHeading}>Pick add-ons</span>
                <span className={styles.addOnSubHeading}>
                    Add-ons help enhance your gaming experience
                </span>
            </section>
            <section>
                <ul className={styles.addOnList}>
                    {pickAddOns.map((addOn) => {
                        return (
                            <li
                                className={`${styles.addOn} ${
                                    addOns[`addOn${addOn.index}`]
                                        ? styles.active
                                        : ''
                                }`}
                                key={addOn.index}
                                onClick={() =>
                                    dispatch({
                                        type: 'addOns',
                                        payload: addOn.index,
                                    })
                                }
                            >
                                <input
                                    type='checkbox'
                                    checked={addOns[`addOn${addOn.index}`]}
                                    readOnly
                                />
                                <div className={styles.addOnContent}>
                                    <div className={styles.addOnDetails}>
                                        <span className={styles.addOnName}>
                                            {addOn.name}
                                        </span>
                                        <span className={styles.addOnDesc}>
                                            {addOn.desc}
                                        </span>
                                    </div>
                                    <span className={styles.addOnPrice}>
                                        +$
                                        {billByMonth
                                            ? addOn.monthlyPrice
                                            : addOn.yearlyPrice}
                                        {billByMonth ? '/mo' : '/yr'}
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}
