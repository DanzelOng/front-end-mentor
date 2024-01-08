import { steps } from '../../utils/data';
import styles from '../../styles/SideBar.module.css';

export default function Sidebar({ index }) {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.sidebarImg}
                src='/images/bg-sidebar-desktop.svg'
                alt='sidebar image'
            />
            <div className={styles.sidebarStepContainer}>
                {steps.map((step) => {
                    return (
                        <section
                            className={styles.sidebarStep}
                            key={step.index}
                        >
                            <span
                                className={`${styles.sidebarCircle} ${
                                    index === step.index ? styles.active : ''
                                }`}
                            >
                                {step.index}
                            </span>
                            <div>
                                <span className={styles.sidebarSubheading}>
                                    Step {step.index}
                                </span>
                                <span className={styles.sidebarHeading}>
                                    {step.label}
                                </span>
                            </div>
                        </section>
                    );
                })}
            </div>
        </aside>
    );
}
