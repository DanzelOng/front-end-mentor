import styles from '../../styles/Button.module.css';

export default function Button({
    content,
    style,
    type,
    index,
    formDetails,
    dispatch,
}) {
    const handleBtnClick = function (curIndex) {
        if (type === 'previous') {
            dispatch({ type });
            return;
        }

        if (type === 'resubmit') {
            dispatch({ type });
            return;
        }

        const { planName, inputStatus } = formDetails;
        switch (curIndex) {
            case 1: {
                const arr = Array.from(
                    Object.entries(inputStatus),
                    ([_, value]) => value
                );
                arr.every((status) => status === 'valid')
                    ? dispatch({ type })
                    : dispatch({ type: 'invalid', payload: 'form' });
                break;
            }
            case 2:
                planName
                    ? dispatch({ type })
                    : dispatch({ type: 'invalid', payload: 'plan' });
                break;
            case 3:
            case 4:
                dispatch({ type });
                break;
            default:
                return new Error('Unknown Index');
        }
    };

    return (
        <button className={styles[style]} onClick={() => handleBtnClick(index)}>
            {content}
        </button>
    );
}
