import { plans } from '../../utils/data';
import Slider from '../slider/Slider';
import ErrorMsg from '../error/ErrorMsg';
import styles from '../../styles/Plan.module.css';

export default function Plan({ formDetails, dispatch }) {
    const { billByMonth, planName, planStatus } = formDetails;

    return (
        <div>
            <section className={styles.planTitle}>
                <span className={styles.planHeading}>Select your plan</span>
                <span className={styles.planSubHeading}>
                    You have the option of monthly or yearly billing.
                </span>
                {planStatus === 'unselected' && (
                    <ErrorMsg
                        style='plan'
                        content='Please select a plan before proceeding'
                    />
                )}
            </section>
            <section>
                <ul className={styles.planTierList}>
                    {plans.map((plan) => {
                        return (
                            <li
                                className={`${styles.plan} ${
                                    planName === plan.name
                                        ? styles.planActive
                                        : ''
                                } `}
                                key={plan.name}
                                onClick={() =>
                                    dispatch({
                                        type: 'plan',
                                        payload: plan.name,
                                    })
                                }
                            >
                                <img
                                    src={`/images/icon-${plan.name}.svg`}
                                    alt='plan tier logo'
                                />
                                <div className={styles.planContent}>
                                    <span className={styles.planName}>
                                        {plan.name}
                                    </span>
                                    <span className={styles.planDesc}>
                                        {plan.description}
                                    </span>
                                    {!billByMonth && (
                                        <span className={styles.planAddOn}>
                                            {plan.addOn}
                                        </span>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <Slider billByMonth={billByMonth} dispatch={dispatch} />
        </div>
    );
}
