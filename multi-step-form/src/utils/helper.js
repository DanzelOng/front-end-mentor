import { formInitialState } from './data';

export default function reducer(state, action) {
    switch (action.type) {
        case 'name': {
            // prevent white spaces at beginning of word
            if (action.payload.startsWith(' ')) return state;

            let status;
            const nonAlphabets = /^\w/;
            const specialCharacters = /[\d]*[^ a-zA-Z]/;

            // name regex validation
            !action.payload
                ? (status = 'empty')
                : !nonAlphabets.test(action.payload)
                ? (status = 'invalid-start')
                : specialCharacters.test(action.payload)
                ? (status = 'contain-special')
                : Array.from(action.payload).reduce(
                      (acc, curValue) =>
                          curValue.trim().length === 1 ? acc + 1 : acc,
                      0
                  ) >= 3
                ? (status = 'valid')
                : (status = 'invalid-length');

            return {
                ...state,
                name: action.payload,
                inputStatus: { ...state.inputStatus, nameStatus: status },
            };
        }
        case 'email': {
            if (action.payload.startsWith(' ')) return state;

            let status;
            const isEmptyEmail = action.payload.trim().length === 0;
            const isValidEmail = /^[\w\d]*@[\w\d]{3,}.\w{2,}(.\w{2,})?$/;

            // email regex validation
            isEmptyEmail
                ? (status = 'empty')
                : isValidEmail.test(action.payload)
                ? (status = 'valid')
                : (status = 'invalid');

            return {
                ...state,
                email: action.payload,
                inputStatus: {
                    ...state.inputStatus,
                    emailStatus: status,
                },
            };
        }
        case 'phoneNumber': {
            if (action.payload.startsWith(' ')) return state;

            // check for non digits
            const containsNonDigits = /[a-zA-Z]*[^ \d]/;
            if (containsNonDigits.test(action.payload)) return { ...state };

            const isEmptyNumber = action.payload.trim().length === 0;
            const isValidLength =
                Array.from(action.payload).reduce(
                    (acc, curValue) =>
                        curValue.trim().length === 1 ? acc + 1 : acc,
                    0
                ) === 10;

            return {
                ...state,
                phoneNumber: action.payload,
                inputStatus: {
                    ...state.inputStatus,
                    phoneNumberStatus: isEmptyNumber
                        ? 'empty'
                        : isValidLength
                        ? 'valid'
                        : 'invalid',
                },
            };
        }
        case 'plan':
            return {
                ...state,
                planName: action.payload,
                planStatus: 'selected',
            };
        case 'slider':
            return {
                ...state,
                billByMonth: !state.billByMonth,
            };
        case 'addOns': {
            const updatedAddOns = { ...state.addOns };
            updatedAddOns[`addOn${action.payload}`] =
                !updatedAddOns[`addOn${action.payload}`];
            return {
                ...state,
                addOns: updatedAddOns,
            };
        }
        case 'invalid': {
            if (action.payload === 'form') {
                const arr = Array.from(
                    Object.entries(state.inputStatus),
                    ([key, value]) => [key, value]
                );
                arr.forEach((status) => {
                    status[1] = status[1] === null ? 'empty' : status[1];
                });
                return {
                    ...state,
                    inputStatus: Object.fromEntries(arr),
                };
            }
            return {
                ...state,
                planStatus:
                    !state.planStatus || state.planStatus === 'unselected'
                        ? 'unselected'
                        : 'selected',
            };
        }
        case 'next':
            return {
                ...state,
                index: state.index + 1,
            };
        case 'previous':
            return {
                ...state,
                index: state.index - 1,
            };
        case 'redirect':
            return {
                ...state,
                index: 2,
            };
        case 'confirm':
            return {
                ...state,
                isReset: true,
            };
        case 'resubmit':
            return formInitialState;
        default:
            return new Error('Unknown Action');
    }
}
