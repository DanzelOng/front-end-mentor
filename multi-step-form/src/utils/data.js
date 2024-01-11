const steps = [
    { index: 1, label: 'Your Info' },
    { index: 2, label: 'Select Plan' },
    { index: 3, label: 'Add-Ons' },
    { index: 4, label: 'Summary' },
];

const addOn = '2 months free';

const plans = [
    { name: 'arcade', monthlyPrice: 9, yearlyPrice: 90, addOn },
    { name: 'advanced', monthlyPrice: 12, yearlyPrice: 120, addOn },
    { name: 'pro', monthlyPrice: 15, yearlyPrice: 150, addOn },
];

const pickAddOns = [
    {
        index: 1,
        name: 'online service',
        desc: 'Access to multiplayer games',
        monthlyPrice: 1,
        yearlyPrice: 10,
    },
    {
        index: 2,
        name: 'larger storage',
        desc: 'Extra 1TB of cloud save',
        monthlyPrice: 2,
        yearlyPrice: 20,
    },
    {
        index: 3,
        name: 'customizable profile',
        desc: 'Custom theme on your profile',
        monthlyPrice: 2,
        yearlyPrice: 20,
    },
];

const formInitialState = {
    index: 1,
    name: '',
    email: '',
    phoneNumber: '',
    planName: null,
    billByMonth: true,
    inputStatus: {
        nameStatus: null,
        emailStatus: null,
        phoneNumberStatus: null,
    },
    planStatus: null,
    addOns: { addOn1: false, addOn2: false, addOn3: false },
    isReset: false,
};

export { steps, plans, pickAddOns, formInitialState };
