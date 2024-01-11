import styles from '../../styles/Slider.module.css';

export default function Slider({ billByMonth, dispatch }) {
    return (
        <section className={styles.slider}>
            <span className={billByMonth ? styles.sliderActive : ''}>
                Monthly
            </span>
            <label htmlFor='checkbox'>
                <input
                    type='checkbox'
                    id='checkbox'
                    checked={!billByMonth}
                    onChange={() => dispatch({ type: 'slider' })}
                />
                <span className={styles.sliderCircle}></span>
            </label>
            <span className={!billByMonth ? styles.sliderActive : ''}>
                Yearly
            </span>
        </section>
    );
}
