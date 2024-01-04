const cardInitialState = {
    username: null,
    pin: null,
    month: null,
    year: null,
    cvc: null,
};

const formInitialState = {
    field1: null,
    field2: null,
    field3: null,
    field4: null,
    field5: null,
};

function validate(name, pin, month, year, cvc) {
    const isNameBlank = name === null || !name.trim().length;
    const isPinBlank = pin === null || !pin.trim().length;
    const isMonthBlank = month === null || !month.trim().length;
    const isYearBlank = year === null || !year.trim().length;
    const isCvcBlank = cvc === null || !cvc.trim().length;

    const nameStatus = !isNameBlank
        ? !/\d/.test(name)
            ? name.trim().length >= 3
                ? 'valid'
                : 'invalid'
            : 'invalid-format'
        : 'blank';

    const pinStatus = !isPinBlank
        ? pin.trim().length === 19
            ? 'valid'
            : 'invalid'
        : 'blank';

    const monthStatus = !isMonthBlank
        ? month.trim().length === 2
            ? 'valid'
            : 'invalid'
        : 'blank';

    const yearStatus = !isYearBlank
        ? year.trim().length === 2
            ? 'valid'
            : 'invalid'
        : 'blank';

    const cvcStatus = !isCvcBlank
        ? cvc.trim().length === 3
            ? 'valid'
            : 'invalid'
        : 'blank';

    const allValid =
        nameStatus === 'valid' &&
        pinStatus === 'valid' &&
        monthStatus === 'valid' &&
        yearStatus === 'valid' &&
        cvcStatus === 'valid';

    return {
        nameStatus,
        pinStatus,
        monthStatus,
        yearStatus,
        cvcStatus,
        allValid,
    };
}

export { cardInitialState, formInitialState, validate };
