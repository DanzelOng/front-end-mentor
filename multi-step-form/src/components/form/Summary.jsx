import { plans, pickAddOns } from '../../utils/data';
import styles from '../../styles/Summary.module.css';

export default function Summary({ formDetails, dispatch }) {
    const { planName, billByMonth, addOns } = formDetails;

    // get selected plan tier
    const selectedPlan = plans.find((plan) => plan.name === planName);

    // subscription cost
    let subscriptionCost = billByMonth
        ? selectedPlan.monthlyPrice
        : selectedPlan.yearlyPrice;

    // get selected add Ons (optional)
    const selectedAddOns = pickAddOns.filter(
        (addOn) => addOns[`addOn${addOn.index}`]
    );

    // add any add on price
    selectedAddOns.forEach((addOn) => {
        subscriptionCost += billByMonth
            ? addOn.monthlyPrice
            : addOn.yearlyPrice;
    });

    return (
        <div>
            <section className={styles.summaryTitle}>
                <span className={styles.summaryHeading}>Finishing up</span>
                <span className={styles.summarySubHeading}>
                    Double-check everything looks OK before confirming.
                </span>
            </section>
            <section className={styles.summaryContentBox}>
                <div className={styles.summaryPriceDetails}>
                    <div className={styles.summaryPriceContent}>
                        <div>
                            <span className={styles.summaryName}>
                                {planName} ({billByMonth ? 'Monthly' : 'Yearly'}
                                )
                            </span>
                            <span
                                className={styles.redirect}
                                role='button'
                                onClick={() => dispatch({ type: 'redirect' })}
                            >
                                Change
                            </span>
                        </div>
                        <span className={styles.subscription}>
                            +$
                            {billByMonth
                                ? selectedPlan.monthlyPrice
                                : selectedPlan.yearlyPrice}
                            {billByMonth ? '/mo' : '/yr'}
                        </span>
                    </div>
                    {selectedAddOns.length ? (
                        <ul className={styles.addOnsContent}>
                            {selectedAddOns.map((addOn) => {
                                return (
                                    <li
                                        className={styles.addOn}
                                        key={addOn.index}
                                    >
                                        <span>{addOn.name}</span>
                                        <span>
                                            +$
                                            {billByMonth
                                                ? addOn.monthlyPrice
                                                : addOn.yearlyPrice}
                                            {billByMonth ? '/mo' : '/yr'}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : null}
                </div>
            </section>
            <section className={styles.summaryTotalPrice}>
                <span>Total (per {billByMonth ? 'month' : 'year'})</span>
                <span>
                    +${subscriptionCost}
                    {billByMonth ? '/mo' : '/yr'}
                </span>
            </section>
        </div>
    );
}
